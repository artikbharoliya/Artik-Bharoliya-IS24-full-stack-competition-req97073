import { Chip, Grid, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const MultiInput = ({ placeHolder }) => {

  const [entries, setEntries] = useState(["Artik Bharoliya"]);

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setEntries([...entries, value]);
    e.target.value = '';
  }

  const handleClear = () => {
    setEntries([]);
  }
  return (
    <>
      <TextField
        id="filled-basic"
        label={placeHolder}
        variant="filled"
        type="text"
        onKeyDown={handleKeyDown}
      />
      {entries.length > 0 ?
        <Grid xs={12} item container justifyContent="space-between" sx={{ mt: "12px" }}>
          <div>
            {entries.map((entry, index) => (
              <Chip label={entry} variant="outlined" />
            ))}
          </div>
          <IconButton aria-label="delete" onClick={handleClear}>
            <RestartAltIcon />
          </IconButton>
        </Grid>
        :
        null
      }
    </>
  );
}

export default MultiInput;
