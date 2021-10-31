import React from "react";
import * as S from "./styled";

const Profile = () => {
  return (
    <S.Wrapper>
      {/* <WrapperStatusCount>
        <h1>Ok</h1>
      </WrapperStatusCount>
      <WrapperUsername></WrapperUsername> */}

      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/55903591?v=4"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Jonata Ramalho</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a
              href="https://github.com/JonataRamalho"
              target="_blank"
              rel="noreferrer"
            >
              JonataRamalho
            </a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
