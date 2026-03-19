export function useInput(updateInfo) {
  function handleInputChange(event, fieldName) {
    const { value } = event.target;
    updateInfo({ [fieldName]: value });
  }

  return { handleInputChange };
}
