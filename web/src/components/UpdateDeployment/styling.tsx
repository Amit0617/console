import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '@mui/material';

export const Label = styled.label`
  position: relative;
  padding-left: 5px;
`;

export const UpdateDeploymentAction = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonTemplate = css`
  padding: 10px 32px;
  gap: 8px;
  color: #374151;
  text-transform: capitalize;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #D7D7D7;
  border-radius: 6px;

  &:hover {
    border-color: #3D4148
  }
`;

export const ReviewSdlButton = styled(Button)`
  ${ButtonTemplate};
  margin-right: 20px;
  border-radius: 8px;
  font-family: 'Satoshi-Medium', sans-serif;
  font-size: 14px;
  box-shadow: 0px 1px 2px 0px #0000000D;

  &:hover {
    background-color: #F4F5F8
  }
`;

export const CancelButton = styled(ReviewSdlButton)`
  margin-left: auto;
`;

export const SaveButton = styled(Button)`
  ${ButtonTemplate};
  background-color: #E11D48;
  color: white;
  align-self: end;

  &:hover {
    background-color: #925562;
  }

  &:disabled {
    color: white;
    background-color: #7e7073;
  }
`;