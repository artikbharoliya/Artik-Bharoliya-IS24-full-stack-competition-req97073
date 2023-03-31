import { Alert, Chip, Collapse, Grid, IconButton, TextField } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useEffect, useState } from "react";

const MultiInput = ({ placeHolder, data, setData, onBlur, limit }) => {

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    if (data) {
      setData([...data, value]);
    } else {
      setData([value]);
    }
    e.target.value = '';
  }

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (data?.length > limit) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [data]);

  const handleClear = () => {
    setData([]);
  }
  return (
    <>
      <TextField
        id="filled-basic"
        label={placeHolder}
        variant="filled"
        type="text"
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
      />
      {data?.length > 0 ?
        <>
          <Grid xs={12} item container justifyContent="space-between" sx={{ mt: "12px" }}>
            <div>
              {data.map((entry, index) => (
                <Chip label={entry} variant="outlined" />
              ))}
            </div>
            <IconButton aria-label="delete" onClick={handleClear}>
              <RestartAltIcon />
            </IconButton>
          </Grid>
          {showError && <Alert severity="error" sx={{ my: 2 }}>Cannot be more than {limit}</Alert>}
        </>
        :
        null
      }
    </>
  );
}

export default MultiInput;
