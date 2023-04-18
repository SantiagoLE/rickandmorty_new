import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import "./styles/formAutocomplete.css"

const FormAutocomplete = ({_allLocations, locationSelect}) => {

  const [suggestions, setSuggestions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

    

  const handleInputChange = (event, { newValue }) => {
    setSelectedValue(newValue);
  };

  const handleSuggestionsFetchRequested = ({ value }) => {
    // Filtrar los _allLocations que coincidan con el valor del input y que empiezen por los caracteres que se escriben 
    const suggestionsFiltered = _allLocations.filter((location) =>
      location.toLowerCase().startsWith(value.toLowerCase())
    );
    // limito el maximo de sugerencias con el .slice
    setSuggestions(suggestionsFiltered.slice(0,5));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    locationSelect(selectedValue)
    setSelectedValue('');
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        getSuggestionValue={ (suggestion) => suggestion}
        renderSuggestion={(suggestion) => <span>{suggestion}</span>}
        inputProps={{
          className: "form_input",
          value: selectedValue,
          onChange: handleInputChange,
          placeholder: "Input Location",
        }}
      />
      <input className='form_buton' type="submit" value="Enviar" />
    </form>
  );
};

export default FormAutocomplete;
