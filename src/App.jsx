import styled from 'styled-components';
import GlobalStyle from './globalStyle';
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <PhoneTextContainer>
          <Phone>
            <PhoneNotch />
            <AppContainer>
              <AppHeader>
                <UserContainer>
                  <AppPath />
                  <AppUser>
                    <UserImage
                      src="./images/avatar.jpg"
                      alt="Profile picture of the user"
                    />
                  </AppUser>
                  <UserInfo>
                    <UserName>Samuel Green</UserName>
                    <UserStatus>Available to Talk</UserStatus>
                  </UserInfo>
                </UserContainer>
                <HeaderDots>
                  <Dot />
                  <Dot />
                  <Dot />
                </HeaderDots>
              </AppHeader>
              <AppBody>
                <MessageContainer>
                  <MessageBox>
                    <Message>
                      That sounds great. I’d be happy with that.
                    </Message>
                  </MessageBox>
                  <MessageBox>
                    <Message>
                      Could you send over some pictures of your dog, please?
                    </Message>
                  </MessageBox>
                </MessageContainer>
                <SenderContainer>
                  <SenderImageContainer>
                    <SenderImageBox>
                      <SenderImage
                        src="./images/dog-image-1.jpg"
                        alt="Portrait of a dog"
                      />
                    </SenderImageBox>
                    <SenderImageBox>
                      <SenderImage
                        src="./images/dog-image-2.jpg"
                        alt="Portrait of a dog in the field"
                      />
                    </SenderImageBox>
                    <SenderImageBox>
                      <SenderImage
                        src="./images/dog-image-3.jpg"
                        alt="Image of a dog holding a tree stick"
                      />
                    </SenderImageBox>
                  </SenderImageContainer>
                  <SenderBox>
                    <SenderText>
                      Here are a few pictures. She’s a happy girl!
                    </SenderText>
                  </SenderBox>
                  <SenderBox>
                    <SenderText>Can you make it?</SenderText>
                  </SenderBox>
                </SenderContainer>
                <MessageContainer>
                  <MessageBox>
                    <Message>
                      She looks so happy! The time we discussed works. How long
                      shall I take her out for?
                    </Message>
                  </MessageBox>
                  <DonationBox>
                    <DonationAlign>
                      <DonationCircle />
                      <DonationName>30 minute walk</DonationName>
                    </DonationAlign>
                    <DonationPrice>$29</DonationPrice>
                  </DonationBox>
                  <DonationBox>
                    <DonationAlign>
                      <DonationCircle />
                      <DonationName>1 hour walk</DonationName>
                    </DonationAlign>
                    <DonationPrice>$49</DonationPrice>
                  </DonationBox>
                </MessageContainer>
                <InputContainer>
                  <Input>
                    <InputText>Type a message…</InputText>
                    <InputSend></InputSend>
                  </Input>
                </InputContainer>
              </AppBody>
            </AppContainer>
          </Phone>
          <Text>
            <TextHeading>Simple booking</TextHeading>
            <TextParagraph>
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </TextParagraph>
          </Text>
        </PhoneTextContainer>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 1440px;
  height: 100vh;
  margin-inline: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    background: linear-gradient(225deg, #E844FF 0%, #8739FF 100%);
    border-radius: 255px;
    position: absolute;
    width: 510px;
    height: 1018px;
    left: -90px;
    top: -318px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 510px;
    height: 1018px;
    left: 1115px;
    top: 318px;
    background: linear-gradient(225deg, #E844FF 0%, #8739FF 100%);
    mix-blend-mode: normal;
    opacity: 0.03;
    border-radius: 255px;
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
  @media only screen and (max-width: 1200px) {
    width: 100%;

    &:after {
      display: none;
    }
  }
  @media only screen and (max-width: 1100px) {
    align-items: baseline;
    &:before {
      top: -524px;
      left: unset;
      right: unset;
    }
    @media only screen and (max-width: 560px) {
      align-items: baseline;
      &:before {
        top: -524px;
        left: unset;
        right: 50%;
        width: 1000px;
      }
  }
`;
const PhoneTextContainer = styled.section`
  display: flex;
  column-gap: 125px;
  margin-left: 76px;
  @media only screen and (max-width: 1200px) {
    column-gap: 32px;
    margin-left: 32px;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    row-gap: 64px;
    padding-inline: 32px;
    margin-left: 0;
  }
`;
const Phone = styled.div`
  height: 505px;
  width: 247px;
  background: #FFFFFF;
  padding-inline: 9.5px;
  padding-block: 11px;
  box-shadow: 0px 30px 60px -10px #3E275340;  
  border-radius: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;
const PhoneNotch = styled.div`
  background: #FFFFFF;
  border-radius: 0px 0px 14px 14px;
  width: 129px;
  height: 29px;
  z-index: 1000;
  position: absolute;
  top: 0;
`;
const AppContainer = styled.div`
  background: #F5F3F7;
  border: 1px solid rgba(62, 39, 83, 0.0509178);
  border-radius: 20px;
  overflow: hidden;
`;
const AppHeader = styled.div`
  background: linear-gradient(225deg, #E844FF 0%, #8739FF 100%);
  border-radius: 20px 20px 6px 6px;
  box-shadow: 0px 0px 13px rgba(62, 39, 83, 0.251202);
  width: 228px;
  height: 66px;
  padding-inline: 16px;
  padding-top: 30px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
const AppPath = styled.span`
  width: 4px;
  position: relative;
  &:after {
    display: inline-block;
    content: "";
    width: 2px;
    height: 6px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(0, 5px) rotate(-30deg);
  }
  &:before {
    display: inline-block;
    content: "";
    width: 2px;
    height: 6px;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0, -6px) rotate(30deg);
  }
`;
const AppUser = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  overflow: hidden;
`;
const UserInfo = styled.span`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;
const UserName = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #FFFFFF;
`;
const UserStatus = styled.div`
  font-weight: 400;
  font-size: 8px;
  line-height: 9px;
  color: #D99EFF;
`;
const UserImage = styled.img``;
const HeaderDots = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1px;
`;
const Dot = styled.div`
  width: 2px;
  height: 2px;
  background: #FFFFFF;
  border-radius: 50%;
`;
const AppBody = styled.div`
  padding-inline: 7.5px;
  padding-block: 11px;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  margin-bottom: 16px;
`;
const MessageBox = styled.div`
  background: #EEE5F4;
  border-radius: 10px 10px 10px 4px;
  padding-inline: 8px;
  padding-block: 6px;
  max-width: 128px;
`;
const Message = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  color: #9341C8;
`;
const SenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 16px;
  row-gap: 8px;
`;
const SenderImageContainer = styled.div`
  display: flex;
  column-gap: 8px;
`;
const SenderImageBox = styled.div`
  box-shadow: 0px 10px 5px -5px rgba(62, 39, 83, 0.045318);
  border-radius: 10px;
  overflow: hidden;
  width: 40px;
  height: 40px;
`;
const SenderImage = styled.img``;
const SenderBox = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 10px 5px -5px rgba(62, 39, 83, 0.045318);
  border-radius: 10px 10px 4px 10px;
  max-width: 128px;
  padding-inline: 8px;
  padding-block: 6px;
`;
const SenderText = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  color: #6E5D7E;
`;
const DonationBox = styled.div`
  background: linear-gradient(225deg, #E844FF 0%, #8739FF 100%);
  box-shadow: 0px 10px 5px -5px rgba(62, 39, 83, 0.045318);
  border-radius: 10px 10px 10px 4px;
  padding-top: 11px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  width: 160px;
`;
const DonationAlign = styled.div`
  display: flex;
  column-gap: 8px;
`;
const DonationCircle = styled.div`
  border: 1px solid #E472FF;
  height: 12px;
  width: 12px;
  border-radius: 50%;
`;
const DonationName = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 11px;
  color: #FFFFFF;
`;
const DonationPrice = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 11px;
  text-align: right;
  color: #FFFFFF;
`;
const InputContainer = styled.div`
  margin-top: 16px;
`;
const Input = styled.div`
  background: #FFFFFF;
  border-radius: 16.9544px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputText = styled.p`
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: -0.0703125px;
  color: #C5C9CC;
  padding-top: 13px;
  padding-bottom: 10px;
  padding-left: 19px;
`;
const InputSend = styled.div`
  background: #3E2753;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-right: 4px;
  padding-top: 6px;
  display: flex;
  &:before {
    transform: translate(11px, 0) rotate(130deg);
    display: inline-block;
    content: "";
    width: 3px;
    height: 8px;
    background-color: #fff;
    border-radius: 1.4px;
  }
  &:after {
    transform: translate(8px, 4px) rotate(50deg);
    display: inline-block;
    content: "";
    width: 3px;
    height: 8px;
    background-color: #fff;
    border-radius: 1.4px;
  }
`;
const Text = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  z-index: 1000;
  max-width: 445px;
  align-self: center;
  @media only screen and (max-width: 1100px) {
    text-align: center;
    margin-bottom: 64px;
  }
`;
const TextHeading = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: #3E2753;
`;
const TextParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #A39DA9;
`;
