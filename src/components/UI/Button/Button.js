import react from "react";
// import styled from "styled-components";

// const Button = styled.button`
//   // 여기서 button은 styled 객체의 메서드. 백틱 안의 내용을 button 메서드에 전달

//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   &:focus {
//     //special spuedo selector 특별한 경우에 사용하겠다고 패키지에 선언함
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
import styles from "./Button.module.css"; // css 모듈에서 css 파일 임포트 하는 방법(styles / calsses 사용)
//css 파일 역시 .modeule.css 을 붙여준다.

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
