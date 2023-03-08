import styled from 'styled-components';

const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: ${(props) => (props.move ? 'calc(100% - 22px)' : '2px')};
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.3s;
`;

const CircleSecondary = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: ${(props) => (props.move ? '2px' : 'calc(100% - 25px)')};
  background-color: var(--purple-2);
  border-radius: 50%;
  transition: all 0.3s;
`;

const Root = styled.div`
  width: ${(props) => (props.fullWidth ? 'auto' : '45px')};
  height: 28px;
  display: flex;
  align-items: center;
  background: ${(props) => (props.move ? '#665BEC' : '#EDEEF0')};
  border-radius: 18px;
  position: relative;
  transition: all 0.3s;

  ${Circle} {
    width: ${(props) => (props.fullWidth ? '50%' : '20px')};
    border-radius: ${(props) => (props.fullWidth ? '16px' : '50%')};
    left: ${(props) => (props.move ? '50%' : '0%')};
  }
`;

const RootSecondary = styled.div`
  width: ${(props) => (props.fullWidth ? 'auto' : '52px')};
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--grey-4);
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.07);
  border-radius: 18px;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;

  .faUpDownLeftRight {
    color: ${(props) => (props.move ? '#fff' : '#EDEEF0')};
    margin-left: 1px;
  }

  .faTrash {
    color: ${(props) => (props.move ? '#EDEEF0' : '#fff')};
  }

  .a-typography {
    z-index: 1;
  }

  ${CircleSecondary} {
    width: 50%;
    border-radius: ${(props) => (props.fullWidth ? '16px' : '50%')};
    left: ${(props) => (props.move ? '50%' : '0%')};
  }

  svg {
    height: 10px;
    z-index: 99;
  }
`;

export { Circle, CircleSecondary, Root, RootSecondary };
