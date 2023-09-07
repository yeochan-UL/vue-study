// 아래로 글로벌 컴포넌트
import Radio from '../module/Radio.vue';
import RadioGroup from '../module/RadioGroup.vue';
import Input from '../module/Input.vue';
import Select from '../module/Select.vue';
import Checkbox from '../module/Checkbox.vue';


const globalComponent = {
    Radio,
    RadioGroup,
    Input,
    Select,
    Checkbox,
};

const addGlobalComponent = (app) => Object.entries(globalComponent)
    .forEach(([name, component]) => {
        app.component(name, component);
    });

export default addGlobalComponent;
