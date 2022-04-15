import React, {useState} from "react";
import styles from './treatment.module.css';
import TArea from './TArea';
import TDiagnosis from './TDiagnosis';
import TExercises from './TExercises';
import TPatientPlan from './TPatientPlan';
import SwitchTab from "../../Common/SwitchTab";
import {treatmentCategories, treatmentPlan} from "../../DummyData";


export default () => {

    const [diagnosisItemIndex, setDiagnosisItemIndex] = useState(1);
    const [exercisesItemIndex, setExercisesItemIndex] = useState(1);
    const [areaActive, setAreaActive] = useState(1);
    const [diagnosisActive, setDiagnosisActive] = useState(1);
    const [planData, setPlanData] = useState([]);

    const areaCategoryChangeHandler = (index) => {
        setDiagnosisItemIndex(index);
        setAreaActive(index);
    };
    const diagnosisCategoryChangeHandler = (index) => {
        setExercisesItemIndex(index);
        setDiagnosisActive(index);
    };

    const planDataChangeHandler = (data) => {
        setPlanData(prevState => [
            ...prevState,
            {...data}
        ])
    }

    const diagnosisIndex = diagnosisItemIndex < 1 ? 1 : diagnosisItemIndex;
    const exercisesIndex = exercisesItemIndex < 1 ? 1 : exercisesItemIndex;


    return (
        <div className={styles['main-container']}>
            <div className={styles['switch-tab-container']}>
                <SwitchTab data={treatmentCategories}/>
            </div>
            <section className={styles['middle-section']}>
                <TArea data={treatmentPlan} onCategoryChange={areaCategoryChangeHandler} active={areaActive}/>
                <TDiagnosis data={treatmentPlan[diagnosisIndex].diagnosis} onCategoryChange={diagnosisCategoryChangeHandler} active={diagnosisActive}/>
                <TExercises data={treatmentPlan[diagnosisIndex].diagnosis[exercisesIndex].exercises} onPlanDataChange={planDataChangeHandler} />
                <TPatientPlan data={planData}/>
            </section>
        </div>
    )
}

// 156