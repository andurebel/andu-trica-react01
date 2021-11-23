import { useSelector, useDispatch } from "react-redux";
import { Button } from "./../ui";
import { setCreatureColor } from "../../actions/creators/profile";
// import {Spinner} from './../ui/loaders'
// import {Input, Select, Checkbox} from './../ui/forms'

export const ProfileForm = () => {
  const { mainColor, secondaryColor, eyeColor } = useSelector(({ profile }) => {
    const { creature } = profile;

    return creature;
  });

  const onSubmit = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  const onColorPickerChange = (event) => {
    const element = event.target;
    const targetProperty = element.name;
    const colorValue = element.value;

    // dispatch to state
    dispatch(setCreatureColor(targetProperty, colorValue));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-4 flex justify-between">
        <label htmlFor="mainColor">Main Color</label>
        <input
          type="color"
          name="mainColor"
          id="mainColor"
          value={mainColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="mb-4 flex justify-between">
        <label htmlFor="secondaryColor">Secondary Color</label>
        <input
          type="color"
          name="secondaryColor"
          id="secondaryColor"
          value={secondaryColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="mb-4 flex justify-between">
        <label htmlFor="eyeColor">Eye Color</label>
        <input
          type="color"
          name="eyeColor"
          id="eyeColor"
          value={eyeColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="text-center">
        <Button type="submit" title="Save">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
