"use strict";

global.URL_BASE = "http://localhost:4200";
//global.URL_BASE = "http://localhost:6002";
//global.URL_BASE = "http://10.0.0.174:4200";
//global.URL_BASE = "http://iraflor.com.br";

global.ENCRYPT_KEY =
  "addc92733c4b0545ca7d036027d197e3aafe8fdc33e1b3bb34b7bea76d" +
  "a9377ff2ef0746b27e412402fa02ec8f466ead362d21a215516e21b5e6" +
  "a3ce57de4e67"

module.exports = {
  pathVersion: "/e-npi/v2"
};

global.FILES_DIR = './npi-files/'

global.NPI_LABELS = {
  number: 'Número',
  created: 'Data de Criação',
  stage: 'Status',
  status: 'Status',
  npiRef: 'NPI de Referência',
  complexity: 'Complexidade',
  annex: 'Anexos',
  client: 'Cliente',
  requester: 'Solicitante',
  name: 'Nome da NPI',
  cost: 'Custo',
  price: 'Preço',
  resources: 'Recursos',
  norms: 'Normas Aplicáveis',
  investment: 'Valor de Investimento',
  fiscals: 'Inc. Fiscais',
  projectCost: 'Custo do Projeto',
  activities: 'Atividades',
  inStockDate: 'Data em Estoque',
  regulations: 'Regulamentações',
  demand: 'Demanda',
  oemActivities: 'Atividades O&M',
  critical: 'Análise Crítica',
  dev: 'Desenvolvimento',
  finished: 'Concluído',
  canceled: 'Cancelado',
  draft: 'Rascunho'
}

global.DEPARTMENTS = [
  'COM',
  'OSC',
  'ADM',
  'MPD',
  'MPR',
  'OPR',
  'MEP',
]

global.DEPARTMENTS_LABELS = [
  { value: 'COM', label: 'Comercial' },
  { value: 'OSC', label: 'Compras' },
  { value: 'ADM', label: 'Administrativo' },
  { value: 'MPD', label: 'P&D' },
  { value: 'MPR', label: 'Produto' },
  { value: 'OPR', label: 'Operações' },
  { value: 'MEP', label: 'Processo' }
],

global.NPI_PIXEL_CRITICAL_DEPTS = ['MPR', 'MEP', 'OPR', 'ADM', 'COM']
global.NPI_INTERNAL_CRITICAL_DEPTS = ['MEP', 'OPR', 'ADM', 'COM']
global.NPI_CUSTOM_CRITICAL_DEPTS = ['MEP', 'OPR', 'ADM', 'COM']
global.NPI_OEM_CRITICAL_DEPTS = ['MEP', 'OPR', 'ADM', 'COM']

global.OEM_ACTIVITIES = [
  { value: 'DOCS', label: 'Solicitação de Documentos (BOM, Gerbers, etx)', dep: [], dept: 'COM', term: 4, annex: true, required: true },
  { value: 'NCM',  label: 'Solicitação do NCM',                            dep: [], dept: 'COM', term: 4,  annex: false, required: true },
  { value: 'BOM',  label: 'Cotação da BOM',                                dep: [], dept: 'OSC', term: 6,  annex: true, required: true },
  { value: 'PROP', label: 'Proposta',                                      dep: [], dept: 'COM', term: 8, annex: true, required: true }
],

  global.MACRO_STAGES = [
    { value: 'SPECS_HW', 	label:'Especificação Técnica - Funcionalidade HW',  dept: 'MPR', term: 1, annex: true },
		{ value: 'SPECS_SW', 	label:'Especificação Técnica - Funcionalidade de SW',dept:'MPR', term: 1, annex: true },
		{ value: 'MECH_SPEC', 	label: 'Especificação Mecânica/Dimensional', 		dept: 'MPR', term: 1, annex: true },
		{ value: 'ELETRIC_LAYOUT',label:'Esquema Elétrico/Layout', 					dept: 'MPD', term: 60,dep: ["SPECS_HW"], annex: true },
		{ value: 'BOM_DESC', 	label: 'BOM com P/N, Descrição', 					dept: 'MPD', term: 5, dep: ["ELETRIC_LAYOUT"], required: true, annex: true },
		{ value: 'GERBER', 		label: 'Arquivo Gerber e Centroide', 				dept: 'MPD', term: 5, dep: ["ELETRIC_LAYOUT"], annex: true },
		{ value: 'MECH_LAYOUT', label: 'Desenho de Partes Mecânicas', 				dept: 'MPR', term: 60,dep: ["MECH_SPEC"], annex: true },
		{ value: 'FIRMWARE', 	label: 'Firmware', 									dept: 'MPD', term: 10,dep: ["GERBER"], annex: true },
		{ value: 'BOM_PRICE', 	label: 'Cotação/Compra da BOM de Protótipo', 		dept: 'OSC', term: 20,dep: ["ELETRIC_LAYOUT", "BOM_DESC"], required: true, annex: true },
		{ value: 'PROTO_ASSEMB',label: 'Montagem de Protótipo', 					dept: 'MPD', term: 10,dep: ["FIRMWARE","BOM_PRICE"], annex: false },
		{ value: 'PROTO_SW', 	label: 'Protótipo de Software', 					dept: 'MPD', term:100,dep: ["SPECS_SW"], annex: true },
		{ value: 'PROTO_VERIF',	label: 'Testes de Verificação de Protótipo',        dept: 'MPD', term: 15,dep: ["PROTO_ASSEMB"], required: true, annex: true },
		{ value: 'PROTO_VALID',	label: 'Testes de Validação de Protótipo',          dept: 'MPR', term: 15,dep: ["PROTO_VERIF"], required: true, annex: true },
		{ value: 'BOM_SUBMIT',	label: 'Cadastro de BOM no Sistema',	            dept: 'MEP', term: 3, dep: ["PROTO_VALID"], required: true, annex: false },
		{ value: 'CHECKLIST',	label: 'Checklist Produtivo',			            dept: 'MEP', term: 7, dep: ["PROTO_VALID"], required: true, annex: true },
		{ value: 'DEVICE', 		label: 'Dispositivos/Moldes - Projeto e Compra',	dept: 'MPR', term: 90,dep: ["MECH_LAYOUT", "CHECKLIST"], annex: true },
		{ value: 'TEMPLATE', 	label: 'Estêncil/Templates', 						dept: 'OSC', term: 5, dep: ["CHECKLIST" ], annex: true },
		{ value: 'DATASHEET', 	label: 'Datasheet do Produto', 				 		dept: 'MPR', term: 5, dep: ["PROTO_VALID"], required: true, annex: true },
		{ value: 'SPEC_TAG', 	label: 'Desenho/Especificação de Etiquetas', 		dept: 'MPR', term: 5, dep: ["DATASHEET"], required: true, annex: true },
		{ value: 'SPEC_PACKING',label: 'Desenho/Especificação Embalagem',           dept: 'MPR', term: 10,dep: ["DATASHEET"], required: true, annex: true },
		{ value: 'MANUAL', 		label: 'Manual para o Produto', 					dept: 'MPR', term: 10,dep: ["DATASHEET"], required: true, annex: true },
		{ value: 'HOMOLOG', 	label: 'Homologação', 			        			dept: 'MPR', term:150,dep: ["DATASHEET"], annex: true },
		{ value: 'EQUIPMENT',   label:'Definição de equipamentos e Processo de Teste',dept:'MPD',term:150,dep: ["PROTO_VALID"], required: true, annex: true },
		{ value: 'JIG', 		label: 'Confecção de Equipamentos e Jiga de Testes',dept: 'OPR', term: 10,dep: ["EQUIPMENT"], required: true, annex: true },
		{ value: 'SMT', 		label: 'Programa para Máquina SMT', 				dept: 'MEP', term: 5, dep: ["GERBER", "BOM_SUBMIT", "TEMPLATE"], annex: false },
		{ value: 'TRYOUT', 		label: 'Try Out Injetora',           				dept: 'OPR', term: 5, dep: ["BOM_SUBMIT", "DEVICE"], annex: false },
		{ value: 'GOLDEN', 		label: 'Golden Sample', 							dept: 'MPR', term: 5, dep: ["PROTO_VALID"], annex: false },
		{ value: 'DOCUMENT_SW',	label: 'Documento de Software',						dept: 'MPD', term: 5, dep: ["PROTO_SW", "PROTO_VALID"], annex: true },
		{ value: 'DOCUMENT_FW',	label: 'Documento de Firmware', 					dept: 'MPD', term: 5, dep: ["FIRMWARE", "PROTO_VALID"], annex: true },
		{ value: 'PRICE_TABLE',	label: 'Tabela de Preço', 							dept: 'COM', term: 5, dep: ["PROTO_VALID"], required: true, annex: true },
		{ value: 'RELEASE_PLAN',label: 'Plano de Lançamento', 						dept: 'MPR', term: 5, dep: ["PROTO_VALID","PRICE_TABLE"], required: false, annex: false },
		{ value: 'PRODUCTION',	label: 'Compra do Primeiro Lote de Produção',		dept: 'OSC', term: 90,dep: ["BOM_SUBMIT", "CHECKLIST"], required: true, annex: true },
		{ value: 'ASSEMBLY',    label: 'Instrução de Montagem', 					dept: 'MEP', term: 5, dep: ["JIG", "CHECKLIST", "GOLDEN", "PRODUCTION"], required: true, annex: true },
		{ value: 'PILOT', 		label: 'Lote Piloto', 								dept: 'MEP', term: 5, dep: ["ASSEMBLY", "PRODUCTION"], required: true, annex: true },
		{ value: 'RELEASE',		label: 'Data de Lançamento', 						dept: null,  term: 0, dep: ["MECH_LAYOUT", "SPEC_TAG", "SPEC_PACKING", "SMT", "DOCUMENT_FW", "DOCUMENT_SW", "RELEASE_PLAN", "PILOT"], required: true, annex: false }
  ],
  
  global.OEM_STAGES = [
		{ value: 'SPECS_HW', 	label:'Especificação Técnica - Funcionalidade HW',  dept: 'MPR', term: 1, annex: true },
		{ value: 'SPECS_SW', 	label:'Especificação Técnica - Funcionalidade de SW',dept:'MPR', term: 1, annex: true },
		{ value: 'MECH_SPEC', 	label: 'Especificação Mecânica/Dimensional', 		dept: 'MPR', term: 1, annex: true },
		{ value: 'ELETRIC_LAYOUT',label:'Esquema Elétrico/Layout', 					dept: 'MPD', term: 60, annex: true },
		{ value: 'BOM_DESC', 	label: 'BOM com P/N, Descrição', 					dept: 'MPD', term: 5,  required: true, annex: true },
		{ value: 'GERBER', 		label: 'Arquivo Gerber e Centroide', 				dept: 'MPD', term: 5,  annex: true },
		{ value: 'MECH_LAYOUT', label: 'Desenho de Partes Mecânicas', 				dept: 'MPR', term: 60, annex: true },
		{ value: 'FIRMWARE', 	label: 'Firmware', 									dept: 'MPD', term: 10, annex: true },
		{ value: 'BOM_PRICE', 	label: 'Cotação/Compra da BOM de Protótipo', 		dept: 'OSC', term: 20,dep: ["ELETRIC_LAYOUT", "BOM_DESC"], required: true, annex: true },
		{ value: 'PROTO_ASSEMB',label: 'Montagem de Protótipo', 					dept: 'MPD', term: 10,dep: ["FIRMWARE","BOM_PRICE"], annex: false },
		{ value: 'PROTO_SW', 	label: 'Protótipo de Software', 					dept: 'MPD', term:100,dep: ["SPECS_SW"], annex: true },
		{ value: 'PROTO_VERIF',	label: 'Testes de Verificação de Protótipo',        dept: 'MPD', term: 15,dep: ["PROTO_ASSEMB"], required: true, annex: true },
		{ value: 'PROTO_VALID',	label: 'Testes de Validação de Protótipo',          dept: 'MPR', term: 15,dep: ["PROTO_VERIF"], required: true, annex: true },
		{ value: 'BOM_SUBMIT',	label: 'Cadastro de BOM no Sistema',	            dept: 'MEP', term: 3, dep: ["BOM_DESC"], required: true, annex: false },
		{ value: 'CHECKLIST',	label: 'Checklist Produtivo',			            dept: 'MEP', term: 7, dep: ["ELETRIC_LAYOUT", "BOM_DESC", "GERBER", "MECH_LAYOUT"], required: true, annex: true },
		{ value: 'DEVICE', 		label: 'Dispositivos/Moldes - Projeto e Compra',	dept: 'MPR', term: 90,dep: ["MECH_LAYOUT", "CHECKLIST"], annex: true },
		{ value: 'TEMPLATE', 	label: 'Estêncil/Templates', 						dept: 'OSC', term: 5, dep: ["GERBER", "CHECKLIST" ], annex: true },
		{ value: 'DATASHEET', 	label: 'Datasheet do Produto', 				 		dept: 'MPR', term: 5, dep: ["PROTO_VALID"], required: true, annex: true },
		{ value: 'SPEC_TAG', 	label: 'Desenho/Especificação de Etiquetas', 		dept: 'MPR', term: 5, dep: ["DATASHEET"], required: true, annex: true },
		{ value: 'SPEC_PACKING',label: 'Desenho/Especificação Embalagem',           dept: 'MPR', term: 10,dep: ["DATASHEET"], required: true, annex: true },
		{ value: 'MANUAL', 		label: 'Manual para o Produto', 					dept: 'MPR', term: 10,dep: ["DATASHEET"], required: true, annex: true },
		{ value: 'HOMOLOG', 	label: 'Homologação', 			        			dept: 'MPR', term:150,dep: ["DATASHEET"], annex: true },
		{ value: 'EQUIPMENT',   label:'Definição de equipamentos e Processo de Teste',dept:'MPD',term:150,dep: ["PROTO_VALID"], required: true, annex: true },
		{ value: 'JIG', 		label: 'Confecção de Equipamentos e Jiga de Testes',dept: 'OPR', term: 10,dep: ["CHECKLIST"], required: true, annex: true },
		{ value: 'SMT', 		label: 'Programa para Máquina SMT', 				dept: 'MEP', term: 5, dep: ["GERBER", "BOM_SUBMIT", "TEMPLATE"], annex: false },
		{ value: 'TRYOUT', 		label: 'Try Out Injetora',           				dept: 'OPR', term: 5, dep: ["BOM_SUBMIT", "CHECKLIST"], annex: false },
		{ value: 'GOLDEN', 		label: 'Golden Sample', 						    dept: 'MPR', term: 5, dep: ["CHECKLIST"], annex: false },
		{ value: 'DOCUMENT_SW',	label: 'Documento de Software',						dept: 'MPD', term: 5, dep: ["PROTO_SW", "PROTO_VALID"], annex: true },
		{ value: 'DOCUMENT_FW',	label: 'Documento de Firmware', 					dept: 'MPD', term: 5, dep: ["FIRMWARE", "PROTO_VALID"], annex: true },
		{ value: 'PRICE_TABLE',	label: 'Tabela de Preço', 							dept: 'COM', term: 5, dep: ["PROTO_VALID"], required: true, annex: true },
		{ value: 'RELEASE_PLAN',label: 'Plano de Lançamento', 						dept: 'MPR', term: 5, dep: ["PROTO_VALID","PRICE_TABLE"], required: false, annex: false },
		{ value: 'PRODUCTION',	label: 'Compra do Primeiro Lote de Produção',		dept: 'OSC', term: 90,dep: ["BOM_SUBMIT", "CHECKLIST"], required: true, annex: true },
		{ value: 'ASSEMBLY',    label: 'Instrução de Montagem', 					dept: 'MEP', term: 5, dep: ["JIG", "CHECKLIST", "GOLDEN", "PRODUCTION"], required: true, annex: true },
		{ value: 'PILOT', 		label: 'Lote Piloto', 								dept: 'MEP', term: 5, dep: ["ASSEMBLY", "PRODUCTION"], required: true, annex: true },
		{ value: 'RELEASE',		label: 'Data de Lançamento', 						dept: null,  term: 0, dep: ["MECH_LAYOUT", "SPEC_TAG", "SPEC_PACKING", "SMT", "DOCUMENT_FW", "DOCUMENT_SW", "RELEASE_PLAN", "PILOT"], required: true, annex: false }
  ],
  
global.REGULATIONS = [
  'ABNT', 'ANATEL', 'INMETRO', 'ANVISA'
]

global.CURRENCIES = [
  'BRL', 'USD', 'EUR', null
]
