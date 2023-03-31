import { Chip, Grid, IconButton, TextField } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const MultiInput = ({ placeHolder, data, setData, onBlur }) => {

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setData([...data, value]);
    e.target.value = '';
  }

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
        :
        null
      }
    </>
  );
}

export default MultiInput;
