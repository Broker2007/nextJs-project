import cl from "./MyArea.module.scss"

const MyArea = (props) => {

    return (
        <textarea {...props} className={cl.areaField} >

        </textarea>
    );
};

export default MyArea;