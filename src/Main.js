import { useAlert } from './alert/AlertContext';

export default function Main() {
  const { show } = useAlert();

  return (
    <>
      <h1>Hello in Context example</h1>
      <button
        onClick={() => show('Text from Main.js')}
        className="btn btn-success"
      >
        Show alert
      </button>
    </>
  );
}
