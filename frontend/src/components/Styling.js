import styled from 'styled-components'


export const Wrapper = styled.div`
  margin: 60px auto;
  display: block;
  padding: 20px 30px 30px 30px;
  max-width: 480px;
  background: #ededed;
  border-radius: 8px;
  `
export const Form = styled.form`
  margin: 60px auto;
  display: block;
  padding: 20px 30px 30px 30px;
  max-width: 480px;
  background: #ededed;
  border-radius: 8px;
  `
export const FieldContainer = styled.div`
  position: relative;
  display: block;
  margin: 10px 0;
  height: 54px;
  width: 100%;
  background: white;
  border: #f0f;
  border-radius: 3px;
  &.-focused label {
    font-size: 11px;
    line-height: 12px;
    color: #888;
    bottom: auto;
    top: 8px;
    font-weight: bold;
  }
  &.-focused input {
    line-height: 62px;
  }
`

export const Input = styled.input`
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  width: 100%;
  transition: border-color $standard-transition;
  z-index: 2;
  display: block;
  background: transparent;
  line-height: 54px;
  margin: 10px 0px;
  padding: 0 10px;
  font-size: 15px;
  border: none;
  color: #333;
  border-radius: 3px;
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  &:focus, &:active {
    outline: none;
    border-color: #ededed;
    border-bottom: 2px solid black;
  }
`
export const Heading = styled.h1`
  font-size: 36px;
  line-height: 1.5;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;  
`
export const Label = styled.label`
  line-height: 1px;
  color: #666;
  font-size: 13px;
  padding: 10px;  
`

export const Button = styled.button`
  display: block;
  margin: 30px 0;
  height: 54px;
  width: 100%;
  background: #33cc77;
  border: 1px solid darken(#33cc77,0.1);
  border-top-color: transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-shadow: -1px -1px rgba(0,0,0,0.1);
  transition: background $standard-transition;
  &:hover {
    background: lighten(#33cc77,10%);
    cursor: pointer;
  }
  `
  export const Link = styled.link`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-shadow: -1px -1px rgba(0,0,0,0.1);
  transition: background $standard-transition;
  &:hover {
    background: lighten(#33cc77,10%);
    cursor: pointer;
  }
  `
