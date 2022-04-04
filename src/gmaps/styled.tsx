import {
  InputField,
  Toggle,
} from "config/global-dependencies/smart-builder-components";
import styled from "styled-components";

export const StyledMapsContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ControlPanel = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0px;
  width: 300px;
  background: white;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 4px;
  z-index: 14;
  box-shadow: rgb(0 0 0 / 14%) 0px 6px 10px, rgb(0 0 0 / 12%) 0px 1px 18px;
`;

export const PanelTitle = styled.div`
  display: grid;
  grid-auto-flow: column;
  -webkit-box-align: center;
  align-items: center;
  grid-auto-columns: 1fr 40px;
  padding: 16px;
  border-bottom: 1px solid rgb(216, 216, 216);
`;

export const PanelContent = styled.div`
  overflow: auto;
  max-height: 425px;
  padding: 32px 32px calc(64px);
  display: grid;
  gap: 16px;
`;

export const MapType = styled.div`
  display: block;
`;

export const H3 = styled.h3`
  margin: 0px;
  text-transform: capitalize;
  font-size: 20px;
  color: rgb(48, 48, 48);
  line-height: 24px;
`;

export const Label = styled.div`
  color: rgb(128, 128, 128);
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 2px;
`;

export const StyledToggle = styled(Toggle)`
  transform: scale(0.5);
  margin-right: -15px;
`;

export const StyledNumberField = styled(InputField)`
  font-size: 20px;
  font-weight: 400;
  width: 75%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledInputField = styled(InputField)`
  font-size: 20px;
  font-weight: 400;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledSuffixSpan = styled.span`
  margin: auto 0px 0px;
  padding: 0px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(48, 48, 48);
`;
