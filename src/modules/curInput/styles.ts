import {styled} from "@mui/system";
import TextField from '@mui/material/TextField';
import {Select, FormControl, Skeleton, Typography, MenuItem} from "@mui/material";

const StyledSkeleton = styled(Skeleton)`
  width: 400px;
  height: 200px;
  border-radius: 8px;
  transform: none;
  background-color: rgba(110, 110, 110, 0.11);

  ::after {
    background: linear-gradient(260deg, rgb(203 203 203 / 1%), rgb(255 255 255 / 75%), rgb(223 223 223 / 4%));
    animation-duration: 0.8s;
    animation-delay: 0s;
  }
`

const StyledTextField = styled(TextField)`
  height: 100%;
  margin: 0;
  border-top: none;

  .MuiInputBase-root {
    height: 100%;
  }

  fieldset {
    border-radius: 0 0 8px 8px;
    border-top: 1px solid rgba(0, 0, 0, 0);
    top: -6px;
  }

  .Mui-disabled {
    fieldset {
      border-top: 1px solid rgba(0, 0, 0, 0) !important;

    }
  }

  .Mui-focused {
    fieldset {
      border-color: rgba(0, 0, 0, 0.23) !important;
      border-top-color: rgba(0, 0, 0, 0) !important;
      border-width: 1px !important;
    }
  }

  .MuiInputBase-root {
    display: flex;
    align-items: flex-start;
    padding: 0;

  }

  .MuiInputBase-input {
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    padding: 24px 22px 5px 22px;
  }
`

const InputBase = styled(FormControl)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
`

const CurrSelect = styled(Select)`
  height: 44px;
  border-radius: 8px 8px 0 0;
  color: #71767A;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  div.MuiSelect-select {
    display: flex;
    align-items: center;
    padding: 0 0 0 15px;
    height: 100%;

    svg {
      visibility: hidden;
    }
  }

  &.Mui-focused {
    fieldset {
      border-color: rgba(0, 0, 0, 0.23) !important;
      border-width: 1px !important;
    }
  }

  svg {
    border-left: 1px solid rgba(0, 0, 0, 0.23);
    height: 100%;
    width: 14px;
    padding: 0 22px 0 22px;

    &.MuiSelect-iconOpen {
      border-left: none;
      border-right: 1px solid rgba(0, 0, 0, 0.23);
    }

    top: 0;
    bottom: 0;
    right: 0;

  }
`

const CurrLabel = styled('div')`
  position: absolute;
  bottom: 16px;
  left: 22px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  color: #71767A;
`
const TextFieldContainer = styled('div')`
  position: relative;
  height: 156px;
`
const MenuProps = {
    sx: {
        maxHeight: 180,
        maxWidth: 400,
        '& .MuiPaper-root': {
            borderRadius: '0 0 8px 8px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'
        },
        "*::-webkit-scrollbar-track": {
            backgroundColor: '#F0F0F0',
            borderRadius: '0 0 8px 0'
        },
        "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#71767A",
            borderRadius: '5px'

        },
        "*::-webkit-scrollbar": {
            width: "5px"
        },

    }
}

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  flex-direction: row;
  width: 100%;

  &.Mui-selected {
    svg {
      margin-right: 0;
      margin-left: auto;
      visibility: visible;
    }
  }

  svg {
    visibility: hidden;
  }

`

const HeadLabel = styled(Typography)`
  position: absolute;
  top: -36px;
  color: #71767A;
  font-weight: 400;
  font-size: 20px;
`

export {
    StyledTextField, InputBase, CurrSelect, CurrLabel,
    TextFieldContainer, MenuProps, StyledSkeleton, HeadLabel, StyledMenuItem
}


