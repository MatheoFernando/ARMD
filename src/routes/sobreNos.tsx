import ORGANIGRAMA from "../assets/ORGANIGRAMA.png"
export  function SobreNos() {
  return (
   <div className="max-w-3xl mx-auto px-4 py-8">
    
      <h1 className="text-2xl font-bold text-center mb-8 text-primary">QUEM SOMOS</h1>


      <div className="space-y-6">
    
        <p className="text-lg leading-relaxed font-medium">
          Alínea b do artigo 2.° do Decreto Presidencial nº 180/10 de 18 de Agosto, que aprova a Política Nacional Farmacêutica, definiu a Direcção Nacional de Medicamentos e Equipamentos (DNME) como a Autoridade Reguladora do Sector Farmacêutico em Angola, sendo responsável pela gestão da aplicação das disposições administrativas, técnicas legais e as normativas do exercício farmacêutico no território nacional.
        </p>

   
        <p className="text-lg leading-relaxed font-medium">
          No entanto, face à necessidade do reforço dos sistemas regulatórios do medicamento conforme normas da Organização Mundial da Saúde (OMS) e da adequação da legislação farmacêutica nacional à Lei Modelo da União Africana (UA) sobre a Regulação dos Produtos Farmacêuticos, a DNME foi transformada em Agência Reguladora de Medicamentos e Tecnologias de Saúde.
        </p>

   
        <p className="text-lg leading-relaxed font-medium">
          A Agência Reguladora de Medicamentos e Tecnologias de Saúde, abreviadamente designada por «ARMED» é um estabelecimento público com personalidade e capacidade jurídicas, dotada de autonomia administrativa, patrimonial e financeira, encarregue de desenvolver ações de regulação, regulamentação, orientação, licenciamento, fiscalização e controlo das atividades no domínio dos medicamentos de uso humano e das tecnologias de saúde, visando garantir a sua qualidade, eficácia e segurança. ( artigo 1º do Decreto Presidencial nº 136/21 de 1 de Junho).
        </p>

      
        <div className=" mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">MISSÃO</h2>
          <p className="text-lg leading-relaxed font-medium">
            Desenvolver acções de regulação, regulamentação, orientação, licenciamento, fiscalização e controlo das actividades no domínio dos medicamentos de uso humano e das tecnologias de saúde, visando garantir a sua qualidade e segurança.
          </p>
        </div>

        <div className=" mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">VISÃO</h2>
          <p className="text-lg leading-relaxed font-medium">
            Transformar a ARMED numa Autoridade Reguladora com recursos materiais, humanos (know-how) e financeiros a altura a fim de se afirmar como membro activo da estrutura centralizada da regulamentação farmacêutica a nível de África.
          </p>
        </div>
        <div className=" mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">VALORES</h2>
          <p className="text-lg leading-relaxed font-medium">
            A ARMED prima pela responsabilidade, disciplina, transparência, imparcialidade, integridade e a busca permanente da excelência.
                                                          </p>
                                                        
                                            </div>
                                             <div className=" mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-primary">ORGANIGRAMA</h2>
          
                                                          <img src={ORGANIGRAMA} alt="" />
        </div>
      </div>
    </div>
  )
}


