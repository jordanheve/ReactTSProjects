import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";

type PatientDetailsProps = {
    patient: Patient;
}
export default function PatientDetails({patient}: PatientDetailsProps) {

  const { deletePatient, getPatientById } = usePatientStore()
  
  return (
    <div className="mx-5 my-10 px-5 py-10 b-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={patient.id} />
        <PatientDetailItem label="Nombre" data={patient.name} />
        <PatientDetailItem label="Email" data={patient.email} />
        <PatientDetailItem label="Propietario" data={patient.caretaker} />
        <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
        <PatientDetailItem label="Sintomas" data={patient.symptoms} />

        <div className="flex justify-between flex-col md:flex-row gap-1 mt-10">
          <button onClick={() => getPatientById(patient.id)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase font-bold text-white rounded-lg">
            Editar
          </button>
          <button onClick={() => deletePatient(patient.id)} className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase font-bold text-white rounded-lg">
            Eliminar
          </button>
        </div>

    </div>
  )
}
