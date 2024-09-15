import { create } from "zustand"
import { v4 as uuidv4 } from 'uuid';
import { devtools, persist } from "zustand/middleware";
import { DraftPatient, Patient } from "./types"
import {toast } from 'react-toastify';
type PatientState = {
    patients: Patient[];
    activeId: Patient['id'];
    addPattient: (data: DraftPatient) => void;
    deletePatient: (id: Patient['id']) => void;
    getPatientById: (id: Patient['id']) => void;
    updatePatient: (data: DraftPatient) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
    return {...patient, id: uuidv4()}
}

export const usePatientStore = create<PatientState>()(devtools(
    
    persist((set)=> (
    {
        patients: [],
        activeId: '',
        addPattient: (data) => {
            
        const newPatient = createPatient(data);
           set((state) => ({
            ...state,
            patients: [...state.patients, newPatient]
           }))
           toast.success('Paciente Agregado Correctamente', {
            position: "top-center"
            });
        },

        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
            toast.error('Paciente Eliminado Correctamente', {
                position: "top-center"
            });
        },

        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },

        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map(patient => {
                    if(patient.id === state.activeId) {
                        return { id: state.activeId, ...data };
                    }
                    return patient;
                }),
                activeId: '',
            }))
            toast.success('Paciente Actualizado Correctamente', {
                position: "top-center"
            });
        }

    }), {
        name: 'patient-storage'
    })
))