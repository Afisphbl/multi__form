export function useInput(updateInfo) {
  function handleInputChange(e, name) {
    const { value } = e.target;
    updateInfo({ [name]: value });
  }

  return { handleInputChange };
}
