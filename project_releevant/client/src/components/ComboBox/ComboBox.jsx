import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  const [selection, setSelection] = useState(null);
  const [show, setShow] = useState(null);

  console.log(show)
  console.log(selection)

  const handleChange = (event, value) => {
    setSelection(value)
  };

  const handleShow = (event,value) =>{
    setShow(value);
  }

  const tipoRecoleccion = [
    { label: 'Fresa' },
    { label: 'Ajo' },
    { label: 'Oliva' },
    { label: 'Cebolla' },
  ];
  
  const tipoMaquinaria =[
    { label:'Tractorista'},
    {label:'Buggy'}
  ]
  
  const tipoTrabajo = [
    { label: 'Recolector' },
    { label: 'Maquinaria Pesada' },
    { label: 'Talador' }
  ];
  
  

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={tipoTrabajo}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tipo de Trabajo" />}
        onChange={handleChange}
      />

      {selection && selection.label === 'Recolector' && (
        <div>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={tipoRecoleccion}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tipo de Recolección" />}
        onChange={handleShow}
      />

        </div>
      )}

      {selection && selection.label === 'Maquinaria Pesada' && (
        <div>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={tipoMaquinaria}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tipo de Maquinaria" />}
        onChange={handleShow}
      />

        </div>
      )}
    </div>
  );
}

