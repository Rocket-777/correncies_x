import {styled} from "@mui/system";
import {Button} from "@mui/material";
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';

export const StyledButton = styled(Button)`
  background-color: #fefefe;
  border: 2px solid rgba(0, 0, 0, 0.05);
  color: #d2d2d2;
  height: 75px;
  width: 75px;
  border-radius: 50px;
  :hover {
    background-color: #f2f2f2;
  }
  margin: auto 30px auto 30px;
`

export const StyledSwapIcon = styled(SwapHorizOutlinedIcon)`
  height: 50px;
  width: 50px;
`
