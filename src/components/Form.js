import React from "react";
import styled from "styled-components";
import MainContainer from "./MainContainer";

const Form = (props) => {
  return (
    <MainContainer>
      <H1>Please send us any requests or queries using this form:</H1>
      <FromContainer>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              <p>Your Name:</p> <Input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              <p>Your Email:</p> <Input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              <p>Message:</p> <TextArea name="message"></TextArea>
            </label>
          </p>
          <p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkbox type="checkbox" required="required" />
              <CheckText>
                I am happy to receive emails regarding this message
                <span style={{ color: "#a52a2a", fontSize: "3.2rem" }}>*</span>
              </CheckText>
            </div>
          </p>
          <p>
            <InputButton type="submit">Send</InputButton>
          </p>
        </form>
        {/*         <form name="contact" method="post"

          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          style={{ display: "flex", flexDirection: "column", width: "50rem" }}
        >
          <p>
            <Label htmlFor="name">
              Your Name
              <Input id="name" type="text" name="name" />
            </Label>
          </p>
          <p>
            <Label htmlFor="email">
              Your Email
              <span style={{ color: "#a52a2a", fontSize: "38px" }}>*</span>
              <Input id="email" type="email" name="email" required="required" />
            </Label>
          </p>
          <p>
            {" "}
            <Label htmlFor="textarea">
              Message
              <span style={{ color: "#a52a2a", fontSize: "38px" }}>*</span>
              <TextArea
                id="textarea"
                type="textarea"
                name="textarea"
                style={{
                  height: "140px",
                  fontSize: "2.4rem",
                }}
              />
            </Label>
          </p>
          <p>
            {" "}
            <Label htmlFor="checkbox">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Checkbox type="checkbox" required="required" />
                <CheckText>
                  I am happy to receive emails regarding this message
                  <span style={{ color: "#a52a2a", fontSize: "3.2rem" }}>
                    *
                  </span>
                </CheckText>
              </div>
            </Label>
          </p>
          <p>
            <InputButton type="submit" value="Send a message" />
          </p>
        </form> */}
      </FromContainer>
    </MainContainer>
  );
};

const FromContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 62.5rem;
  padding: 0.6rem 0.75rem 2rem 0.75rem;
  border-radius: 0.8rem;
  background: rgba(213, 221, 224, 0.4);
`;

const H1 = styled.h1`
  width: 62.5rem;
  font-size: 22px;
  padding-left: 3rem;
  margin-bottom: 1rem;
  font-weight: 300;
  margin-top: -100px;
  padding: 0.6rem 0.75rem 1rem 0.75rem;
  border-radius: 0.8rem;
  background: rgba(213, 221, 224, 0.4);
`;

const Input = styled.input`
  width: 50rem;
  padding: 7px;
  height: 32px;
  border-radius: 0.6rem;
  outline: 0.2rem solid black;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  font-size: 1.6rem;
`;
const TextArea = styled.textarea`
  font-family: "Poppins, sans-serif";
  width: 50rem;
  height: 140px;
  padding: 7px;
  border-radius: 0.6rem;
  outline: 0.2rem solid black;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  font-size: 1.6rem;
`;

const Checkbox = styled.input`
  height: 22px;
  width: 22px;
  outline: 0.2rem solid black;
  accent-color: #333;
  &:checked {
    background-color: #fff;
    color: #333;
  }
`;

const CheckText = styled.p`
  text-align: left;
  font-size: 1.4rem;
  line-height: 1;
  width: 44rem;
  padding-left: 2rem;
  margin-top: -5px;
`;

const InputButton = styled.button`
  border-radius: 0.75rem;
  outline: 0.2rem solid black;
  font-weight: 700;
  margin-top: 20px;
  font-size: 1.75rem;
  padding: 1.7rem 2rem;
  width: 20rem;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  background: #fff;
  cursor: pointer;
`;

export default Form;
