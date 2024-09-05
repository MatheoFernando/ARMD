import { useState } from 'react';
import { DadosPessoais } from './steps/DadosPessoais';
import { DadosInstitucionais } from './steps/DadosInstitucionais';
import { AnexarDocumentos } from './steps/AnexarDocumentos';
import { Pagamento } from './steps/Pagamento';
import { DadosAcademicos } from './steps/DadosAcademicos';

export function Inscricoes() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: '',
    step2Data: '',
    step3Data: '',
    step4Data: '',
    step5Data: '',
  });

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePreviousStep = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const stepTitles = [
    "Dados Pessoais",
    "Dados Institucionais",
    "Dados Acadêmicos",
    "Anexar Documentos",
    "Pagamento",
  ];

  return (
    <div className="flex flex-col items-center container w-full">
      <div className="my-32 rounded shadow py-12 w-screen">
        <div className="flex items-center justify-center w-full">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center w-full">
              <div
                className={`w-8 h-8 shrink-0 p-1.5 flex items-center justify-center rounded-full mx-2
                ${currentStep >= step ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <span className="text-base text-white font-bold">{step}</span>
              </div>
              {step < 5 && (
                <div
                  className={`w-full h-[2px] rounded-lg 
                  ${currentStep > step ? 'bg-blue-600' : 'bg-gray-300'}`}
                ></div>
              )}
            </div>
          ))}
        </div>

   
      </div>

      <div className="w-full mt-6">
        {currentStep === 1 && (
          <DadosPessoais formData={formData} handleChange={handleChange} handleNextStep={handleNextStep} />
        )}
        {currentStep === 2 && (
          <DadosInstitucionais
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <DadosAcademicos
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <AnexarDocumentos
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 5 && (
          <Pagamento
            formData={formData}
            handleChange={handleChange}
            handlePreviousStep={handlePreviousStep}
          />
        )}
      </div>
    </div>
  );
}
