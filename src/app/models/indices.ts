export interface Indices {
    codigoPaciente: string;
    sexoPaciente: string;
    idadePaciente: string;

    dataEntradaUtisSvep:any;
    dataEvolucaoCasoSivep:any;
    dataInicioSintomas:any;
    dataInternacaoSivep:any;
    dataNotificacao:any;
    dataObito:any;
    dataResultadoExame:any; 
    dataSaidaUtisSvep:any;
    dataSolicitacaoExame:any;
    
    obitoConfirmado: boolean;
    
    estadoPaciente: string;
    codigoMunicipioPaciente: string;
    municipioPaciente: string;
    bairroPaciente: string;
}


// bairroPaciente - Bairro de residência do paciente - Textual
// classificacaoEstadoSivep - Resultado do exame - Categórico
// codigoMunicipioPaciente - Código do município fornecido pelo IBGE - Numérico
// codigoPaciente - Código identificador do paciente - Numérico
// comorbidadeAsmaSivep - Indicador de asma - Categórico
// comorbidadeCardiovascularSivep - Indicador de problemas cardiovas- culares - Categórico
// comorbidadeDiabetesSivep - Indicador de diabetes - Categórico
// comorbidadeHematologiaSivep - Indicador de hematologia - Categórico
// comorbidadeImunodeficienciaSivep - Indicador de Imunodeficiência - Categórico
// comorbidadeNeurologiaSivep - Indicador de morbidade neurológica - Categórico
// comorbidadeObesidadeSivep - Indicador de obesidade - Categórico
// comorbidadePneumopatiaSivep - Indicador de pneumonia - Categórico
// comorbidadePuerperaSivep - Indicador de morbidade puerperal (parto precoce) - Categórico
// comorbidadeRenalSivep - Indicador de morbidade renal - Categórico
// comorbidadeSindromeDownSivep - indicador de síndrome de Down - Categórico
// dataEntradaUtisSvep - Data de entrada na UTI - Data
// dataEvolucaoCasoSivep - Data do diagnóstico de evolução - Data
// dataInicioSintomas - Data de início dos sintomas - Data
// dataInternacaoSivep - Data de internação do paciente - Data
// dataNotificacao - Data de notificação do exame - Data
// dataObito - Data do óbito - Data
// dataResultadoExame - Data do resultado do exame - Data
// dataSaidaUtisSvep - Data de saída da UTI - Data
// dataSolicitacaoExame - Data de solicitação de exame - Data
// estadoPaciente - Estado de residência do paciente - Categórico
// evolucaoCasoSivep - Diagnótico de evolução do caso (Cura ou óbito) - Categórico
// idSivep - Identificador do paciente no Sistema de Vigilância da Saúde - Numérico
// idadePaciente - Idade do paciente em anos - Numérico
// municipioPaciente - Município de residência do paciente - Textual
// obitoConfirmado - Confirmação de óbito - Booleano
// paisPaciente - País de residência do paciente - Categórico
// resultadoFinalExame - Resultado do exame final - Categórico
// sexoPaciente - Sexo do paciente - Categórico