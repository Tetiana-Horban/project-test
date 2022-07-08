import AppContainer from "./App.styled";
import Modal from "./components/Modal/Modal";
import {
  Item,
  Line,
  List,
  Text,
  Title,
} from "./components/Modal/modalContent.styled";
import useModal from "./hooks/useModal";

const App = () => {
  const { isShowing, toggle } = useModal();
  return (
    <AppContainer>
      <button onClick={toggle}>Show Modal</button>
      <Modal isShowing={isShowing} hide={toggle}>
        <Title>
          Your recommended daily
          <br /> calorie intake is
        </Title>
        <Text>
          2800 cal
          {/* кількість каллорій (приходить з бека) */}
        </Text>
        <Line />
        <List>
          Foods you should not eat
          <Item>список (приходить з бека)</Item>
        </List>
      </Modal>
    </AppContainer>
  );
};

export default App;
