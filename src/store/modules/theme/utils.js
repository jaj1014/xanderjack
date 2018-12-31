export default {
  convertPickerColor(payload) {
    const { prop, pickerColor } = payload
    return {
      color: `rgba(${pickerColor.rgba.r}, ${pickerColor.rgba.g}, ${pickerColor.rgba.b}, ${pickerColor.rgba.a})`,
      prop
    }
  }
}