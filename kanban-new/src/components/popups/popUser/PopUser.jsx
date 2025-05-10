import * as S from "./PopUser.styled";

export const PopUser = () => {
  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitYes id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </S.PopExitYes>
              <S.PopExitNo id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};
