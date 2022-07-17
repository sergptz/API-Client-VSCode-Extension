import React from "react";
import shallow from "zustand/shallow";

import DetailOption from "../../../components/DetailOption";
import MenuOption from "../../../components/MenuOption";
import SelectWrapper from "../../../components/SelectWrapper";
import { COMMON, OPTION, RESPONSE } from "../../../constants";
import useResponseDataStore from "../../../store/responseDataStore";
import useResponseOptionStore from "../../../store/responseOptionStore";
import ResponseMetaData from "../MetaData/ResponseMetaData";
import ResponseMenuOption from "./ResponseMenuOption";

const ResponseMenu = () => {
  const responseData = useResponseDataStore((state) => state.responseData);
  const { responseOption, handleResponseOptionChange } = useResponseOptionStore(
    (state) => ({
      responseOption: state.responseOption,
      handleResponseOptionChange: state.handleResponseOptionChange,
    }),
    shallow,
  );

  return (
    <>
      <DetailOption>
        <SelectWrapper>
          {OPTION.RESPONSE_MENU_OPTIONS.map((responseMenuOption, index) => (
            <React.Fragment key={RESPONSE.RESPONSE + index}>
              <MenuOption
                currentOption={responseOption}
                menuOption={responseMenuOption}
              >
                <h3
                  onClick={(event) =>
                    handleResponseOptionChange(event.target.innerText)
                  }
                >
                  {responseMenuOption}
                </h3>
              </MenuOption>
              {responseMenuOption === COMMON.HEADERS && (
                <p>({responseData?.headersLength})</p>
              )}
            </React.Fragment>
          ))}
        </SelectWrapper>
        <ResponseMetaData {...responseData} />
      </DetailOption>
      <ResponseMenuOption />
    </>
  );
};

export default ResponseMenu;
