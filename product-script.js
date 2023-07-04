const tabletDataset = [
  ["Aceclofenac 100mg + Paracetamol 325mg"],
  ["Aceclofenac 100mg + Thiocolchicoside 4mg"],
  ["Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 10mg"],
  ["Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg"],
  ["Aceclofenac 100mg + Paracetamol 325mg + Chlorzoxazone 250mg"],
  ["Aspirin 150mg + Paracetamol 250mg + Caffeine 25mg"],
  ["Albendazole 400mg"],
  ["Acetazolamide 250mg"],
  ["Alprazolam 0.25 / 0.5 / 1mg"],
  ["Amitriptyline 12.5mg + chlordiazepoxide 10 mg"],
  ["Amitriptyline 12.5mg + chlordiazepoxide 5 mg"],
  ["Amlodipine 5 mg / 10 mg"],
  ["Atenolol 50mg + Amlodipine besylate 5mg"],
  ["Alumina 250mg + Magnesium Hydroxide 150mg + Simethicone 40g"],
  ["Amitriptyline 10mg / 25mg / 50mg / 75mg"],
  ["Artesunate Tablets 50 mg / 100 mg / 200mg"],
  ["Ascorbic Acid Chewable Tablets 500 mg"],
  ["Atenolol Tablets IP 50 mg / 100mg"],
  ["Atoravastatin 5mg / 10mg / 20mg"],
  ["Azithromycin 100mg / 250 mg / 500 mg"],
  ["Ampicillin 125mg"],
  ["Ampicillin 250mg"],
  ["Ampicillin 500mg"],
  ["Amoxycillin 125mg"],
  ["Amoxycillin 250mg"],
  ["Amoxycillin 500mg"],
  ["Betamethazone 0.5mg / 1mg"],
  ["Betahistine 8mg / 16mg / 24mg"],
  ["Carbamazepine 100mg / 200mg / 400mg"],
  ["Cetirizine Dihydrochloride 10mg"],
  ["Clobazam 5mg / 10mg"],
  ["Clonazepam 0.25mg / 0.5mg / 1mg / 2mg"],
  ["Clozapine 50mg / 100mg"],
  ["Cyproheptadine Hydrochloride 2mg / 4mg"],
  ["Chlorpromazine 100mg + Trihexiphenydyl 2 mg"],
  ["Chlorpromazine 200mg + Trihexiphenydyl 2 mg"],
  ["Codeine Sulphate 15mg"],
  ["Cetirizine DiHcl 10mg + Pseudoephedrine Hcl 30mg"],
  ["Chloroquine Phosphate 250mg"],
  ["Ciprofloxacin 100mg / 250mg / 500 mg / 750 mg"],
  ["Ciprofloxacin 250 mg + Tinidazole 300mg"],
  ["Ciprofloxacin 500 mg + Tinidazole 600mg"],
  [
    "Calcium Carbonate 500mg + Vitamin D3 250 IU + Magnesium 40mg + Manganese 1.8mg + Zinc sulphate 7.5mg + Copper sulphate 1mg",
  ],
  ["Zinc sulphate 7.5mg + Copper sulphate 1mg"],
  ["Calcium carbonate 500mg + Vitamin D3 250 IU"],
  ["Calcium carbonate 250mg + Vitamin D3 125 IU"],
  ["Cefaclor 250 mg"],
  ["Cefadroxil 125mg"],
  ["Cefadroxil 250mg"],
  ["Cefadroxil 500mg"],
  ["Cefadroxil BP 250 mg"],
  ["Cefdinir 125 mg"],
  ["Cefixime 50 mg"],
  ["Cefixime 100 mg"],
  ["Cefixime 200 mg"],
  ["Cefixime 400 mg"],
  ["Cefixime 100mg + Ofloxacin 100mg"],
  ["Cefixime 200mg + Ofloxacin 200mg"],
  ["Cefixime 200mg + Ornidazole 500mg"],
  ["Cefixime 200 mg + Dicloxacillin 500 mg"],
  ["Cefixime + Lactic Acid Bacillus Tablets"],
  ["Cefpodoxime 50mg"],
  ["Cefpodoxime 100mg"],
  ["Cefpodoxime 200mg"],
  ["Cefpodoxime 200mg + Ofloxacin 200mg"],
  ["Cefuroxime 250mg"],
  ["Cefuroxime 500mg"],
  ["Cephalexin 125mg"],
  ["Cephalexin 250mg"],
  ["Cephalexin 500mg"],
  ["Deflazacort Tablets 6 mg"],
  ["Dexamethazone 0.5mg"],
  ["Diethyl carbamazine citrate 50mg / 100mg"],
  ["Diazepam 5 mg / 10mg"],
  ["Diltiazem Hydrochloride 30mg / 60mg"],
  ["Dexchlorpheniramine Maleate 6mg"],
  ["Diclofenac Sodium 50mg / 100mg / 100mg SR"],
  ["Diclofenac Sodium 100mg SR"],
  ["Diclofenac Sodium 50mg + Paracetamol 325mg"],
  ["Diclofenac sodium 50mg+ Serratiopeptidase 10mg"],
  ["Diclofenac sodium 50mg + paracetamol 325mg + Chlorzoxazone 250mg"],
  ["Diclofenac sodium 50mg + Paracetamol 325mg + Dicyclomine 20mg"],
  ["Diclofenac Potassium 50mg + Paracetamol 325mg"],
  ["Dicyclomine 15mg + Paracetamol 500mg"],
  ["Dicyclomine 20mg + Paracetamol 500mg"],
  ["Diphenhydramine Hcl 25mg + Ephedrine Hcl 15mg"],
  ["Drotaverine Hydrochloride 80mg + Mefenamic acid 250mg"],
  [
    "Diethyl Carbamazine Citrate100mg + Guaiphenesin 60mg + Chlorpheniramine maleate 2mg",
  ],
  ["Duloxetine 20mg"],
  ["Drotaverine 80 mg"],
  ["Domperidone 10 mg"],
  ["Diphenhydramine 25mg + Ephedrine 15mg"],
  ["Diclofenac Potassium 50mg + Paracetamol 325mg + Serratiopeptidase 10mg"],
  ["Enalapril Maleate Tablets 2.5 Mg / 5 mg / 10mg"],
  ["Etizolam Tablets 0.5mg"],
  ["Ethambutol Hydrochloride 800mg"],
  ["Ethamsylate BP 250mg"],
  ["Erythromycin 125mg / 250mg / 500mg"],
  ["Etoricoxib 90mg"],
  ["Escitalopram oxalate 10mg + clonazepam 0.5mg"],
  ["Escitalopram Oxalate 10mg"],
  ["Ethylmorphine Hydrochloride 16mg"],
  ["Ephedrine Hydrochloride 15mg"],
  ["Ephedrine 15mg + Bromhexine 8mg + Chlorpheniramine maleate 4mg"],
  ["Famotidine 20mg / 40mg"],
  ["Fexofenadine Hydrochloride120mg / 180mg"],
  ["Folic acid 5mg"],
  ["Folic acid 1.5mg + Niacinamide 50mg + Riboflavine 10mg"],
  ["Ferrous Ascorbate 100mg + Folic acid 1.5mg + Zinc sulpahte 61.8mg"],
  ["Fexofenadine 120 mg"],
  ["Flunarizine Dihydrochloride 5mg / 10mg"],
  ["Furazolidone 100mg"],
  ["Fluconazole 50mg /150 mg / 200 mg / 400 mg"],
  ["Ferrous fumarate 50mg + Folic acid 750mcg + Zinc sulphate 61.8mg"],
  ["Glibenclamide 5mg"],
  ["Glimepiride Tablets 1 mg / 2 mg / 3 mg / 4 mg / 6 mg"],
  ["Glipizide Tablets 5 mg"],
  ["Griseofulvin 250mg"],
  ["Haloperidol 0.25mg /1.5 mg / 5 mg / 10 mg / 20mg"],
  ["Haloperidol 1.5mg + Trihexyphenidyl 2mg "],
  ["Haloperidol 5mg + Trihexyphenidyl 2mg"],
  ["Haloperidol 10mg + Trihexyphenidyl 2mg"],
  ["Ibuprofen 400mg"],
  ["Imipramine Hydrochloride 25mg"],
  ["Imipramine Hydrochloride 25mg + Diazepam 2mg"],
  ["Ibuprofen 400mg + Mefenamic acid 250mg"],
  ["Ibuprofen 400mg + Paracetamol 325mg"],
  ["Ketoconazole 200 mg Tablet"],
  ["Ketoprofen 100 mg"],
  ["Levofloxacin 250mg / 500mg / 750mg"],
  ["Loperamide Hydrochloride 2mg"],
  ["Levocetrizine Dihydrochloride 5 mg"],
  ["Lorazepam 1mg / 2mg"],
  ["Lithium Carbonate Tablets 150mg / 300mg"],
  ["Levocetirizine 2.5mg + Montelukast 4mg"],
  ["Lorsartan Potassium 25mg / 50mg"],
  ["Losartan Potassium 50mg + Amlodipine 5mg"],
  ["Losartan potassium 50mg+ Hydrochlorthiazide 12.5mg"],
  ["Lornoxicam 4mg + Paracetamol 500mg"],
  ["Lornoxicam 8mg + Paracetamol 500mg"],
  ["Levocetirizine 5mg + Montelukast 10mg"],
  ["Mebendazole Tablets 100mg"],
  ["Mefenamic Acid 250mg / 500mg"],
  ["Metoclopramide 10g"],
  ["Mitrazapine 30mg"],
  ["Metronidazole 300mg + Furazolidone 100mg Tablets"],
  ["Metronidazole 200mg + Furazolidone 50mg + Dicyclomine HCL 10mg Tablets"],
  ["Metoclopromide 5mg + Paracetamol 500mg"],
  ["Mefenamic acid 250mg+ Dicyclomine Hcl 10mg"],
  ["Mefenamic acid 250mg + Drotaverine Hydrochloride"],
  [
    "Methylcobalamin 1500mcg + Folic acid 1.5mg + Vitamin B1 10mg + Vitamin B6 3mg + Alpha lipoic acid 100mg",
  ],
  ["Mefenamic acid 250 mg + Tranaxemic acid 500mg"],
  ["Moxifloxacin 400 mg T"],
  ["Mecobalamin 1500mcg + Nortriptyline 10mg + Pregabalin 75mg"],
  ["Mecobalamin 500mcg + Gabapentin 300mg"],
  ["Mecobalamin 750mcg + Pregabalin Hcl 75mg"],
  ["Methylcobalamine 500mg + Pyridoxine 10mg + Folic acid 5mg"],
  ["Methylprednisolone Tablets 4 mg / 8 mg / 16 mg"],
  ["Metocloperamide 10mg"],
  ["Metronidazole 200 mg / 250 mg / 400 mg / 500 mg"],
  ["Metformin Tablets 500 mg / 850 mg / 1000 mg"],
  ["Metformin 250mg / 500 mg + Glipizide 2.5 mg / 5 mg"],
  ["Metformin 500 mg / 1000mg + Glimepride 1 mg / 2mg"],
  ["Metformin 500 mg / 1000mg + Voglibose 0.3mg"],
  ["Metformin 500 mg / 1000mg + Vildagliptin 50mg"],
  ["Metformin 500 mg / 1000mg + Sitagliptin 50mg"],
  ["Nalidixic Acid 500mg"],
  ["Nimesulide 100mg / 200mg"],
  ["Nitrazepam 5mg / 10mg"],
  ["Nifedipine 5 mg /10 mg / 20mg"],
  ["Nimesulide 100 mg + Paracetamol 325 mg"],
  ["Nimesulide 100mg + Tizaniadine 2mg"],
  ["Norfloxacin 400mg + Tinidazole 600mg"],
  ["Norfloxacin 100mg / 400mg / 800mg"],
  ["Ofloxacin 200 mg / 400 mg"],
  ["Ofloxacin 200 mg + Ornidazole 500mg"],
  ["Ofloxacin 200mg + Tinidazole 600mg"],
  ["Olanzapine Tablets 2.5 mg / 5 Mg / 10 mg"],
  ["Olmesartan 40 mg + Amlodipine 5 mg"],
  ["Olmesartan Medoxomil Tablets 20 mg / 40 mg"],
  ["Olmesartan 40mg + Hydrochlorthiazide 12.5mg"],
  ["Olmesartan 20mg + Hydrochlorthiazide 12.5mg"],
  ["Ondansetron Hydrochloride Tablets 4 mg"],
  ["Ondansetron 4mg + Omeprazole 10mg"],
  ["Pantoprazole 40 mg"],
  ["Pantoprazole 40 mg + Domperidone 10 mg"],
  ["Pantoprazole 20mg + Domperidone 10mg"],
  [
    "Paracetamol + Phenylephrine Hydrochloride + Chlorpheniramine Maleate Tablets",
  ],
  ["Paracetamol 500mg + Chlorpheniramine Maleate 4mg"],
  ["Paracetamol 125mg / 500 mg / 625 mg"],
  ["Pheniramine Maleate 25mg / 50mg"],
  ["Piroxicam 20mg"],
  ["Paracetamol 250mg + Methocarbamol 350mg"],
  ["Paracetamol 375mg / 500mg + Phenylepehrine Hcl 5mg+ Cetirizine Hcl 5mg"],
  [
    "Paracetamol 375mg / 500mg + Chlorpheniramine maleate 2mg + Phenylepherine Hcl 5mg",
  ],
  ["Paracetamol 200mg + Aspirin 150mg + Caffeine 25mg"],
  ["Paracetamol 500mg + Caffeine 30mg"],
  ["Paracetamol 500mg + Caffeine 32mg + Ephedrine 8mg"],
  ["Promethazine theoclate 25mg"],
  ["Piracetam Tablets 400 mg / 800 mg"],
  ["Pefloxacin 400mg"],
  ["Propanolol 10mg"],
  ["Prednisolone 5 mg / 10 mg"],
  ["Pyrimethamine 25mg"],
  ["Prochlorperazine Maleate 5 mg"],
  ["Pyrimethamine 25mg + Sulphamethaxazole 500mg"],
  ["Pyrazinamide 750mg"],
  ["Paracetamol 500mg + Caffeine 50mg"],
  ["Paracetamol 250mg + Caffeine 30mg + Salicylamide 150mg"],
  [
    "Pyrimethamine 25mg + Sulphadoxine 500mg Tablets IP Artesunate Tablets 50mg (For combikit pack only)",
  ],
  ["Paracetamol 325mg + Tramadol 37.5mg"],
  ["Paracetamol 500 + Tramadol 50mg"],
  ["Quinine Sulphate Tablets 300 mg"],
  ["Raberprazole 20 mg"],
  ["Rabeprazole 20mg+ Domperidone 10mg"],
  ["Ramipril 2.5 mg / 5 mg"],
  ["Ranitidine Hcl 150mg + Domperidone 5mg / 10mg"],
  ["Ranitidine Hcl 150mg + Dicyclomine Hcl 10mg"],
  ["Rifampicin 100mg / 450mg + Isoniazide 100mg / 300mg"],
  ["Roxithromycin 50mg / 150"],
  ["Risperidone 1mg / 2mg / 3mg / 4mg"],
  ["Rifampicin 150mg"],
  ["Rosuvastatin Tablets IP 5mg / 10 mg / 20 mg / 40 mg"],
  ["Salbutamol 4mg Tablets"],
  ["Secnidazole 1mg Tablets"],
  ["Sodium valproate 200mg / 300mg"],
  ["Salbutamol 2mg + Theophylline 100mg"],
  ["Salbutamol 4mg + Theophylline 200mg"],
  ["Salbutamol 4mg + Theophylline 200mg + Bromhexine 16mg"],
  [
    "Sildenafil Citrate Tablets 20 mg / 50 mg / 100mg / 120 mg / 150 mg / 200 mg",
  ],
  ["Sertraline Tablets 25 mg / 50 mg"],
  ["Sparfloxacin 100mg / 200mg / 400mg"],
  ["Serratiopeptidase 10mg"],
  ["Sulfadoxine + Pyrimethamine Tablets USP"],
  ["Tetracycline 250mg"],
  ["Telmisartan 20 mg / 40 mg / 80mg"],
  ["Telmesartan 40 mg + Amlodipine 5 mg"],
  ["Telmisartan 40 mg + Hydrochlorothiazide 12.5 mg"],
  ["Telmisartan 80 mg + Hydrochlorothiazide 12.5 mg"],
  ["Terbinafine Tablets 60mg / 250 mg / 500 mg"],
  ["Tramadol Hydrochloride 50 mg / 100mg"],
  ["Trifluoperazine 5mg + chlorpromazine 50mg + Trihexyphenidyl 2mg"],
  ["Tramadol Hcl 37.5 mg + Paracetamol 325 mg"],
  ["Trimipramine 10mg"],
  ["Tranexamic Acid ablets 500 mg"],
  ["Trifluoperazine 2.5mg /5mg / 10mg + Trihexyphenidyl 1mg / 2mg"],
  ["Trihexyphenidyl Hydrochloride 2 mg / 5mg "],
  ["Tadalafil Tablets 10 mg / 20 mg"],
  ["Trimethoprim 160mg + Sulphamethoxazole 800mg"],
  ["Valporate Sodium 500 mg"],
  ["Verapamil Hydrochloride 240 mg"],
  ["Voglibose Tablets IP 0.2 mg / 0.3 mg"],
  ["Vitamin C 500mg Tablets"],
  [
    "Zinc sulphate 61.8mg + Thiamine 10mg + Riboflavine 10mg + Niacinamide 50mg + Pyridoxine 3mg + Cynacobalamine 5mcg + Calcium 12.5mg + Ascorbic acid 150mg",
  ],
];

const capsulesDataset = [
  ["Acebrophylline Capsules 100 mg"],
  [
    "Alpha lipoic acid 100mg + Mecobalamin 1500mcg + Pyridoxine 3mg + Folic acid 1.5mg",
  ],
  ["Chloramphenicol Capsules BP 250 mg"],
  ["Chloramphenicol Capsules IP 250 mg / 500 mg"],
  ["Doxycycline 100 mg"],
  ["Esomeprazole 40mg + Domperidone 30mg"],
  [
    "Ferrous fumarate 350mg + Cyanocobalamine 15mcg + Ascorbic acid 150mg + Folic acid 1.5mg",
  ],
  ["Furazolidone 100mg + Loperamide 2mg"],
  ["Gabapentin Capsules USP 100 mg / 300 mg"],
  ["Haemantic Capsules"],
  ["Itraconazole 100 mg / 200 mg"],
  ["Lansoprazole 30 mg"],
  ["Mecobalamin 750mg + Pregabalin 75mg"],
  ["Omeprazole 20 mg / 40 mg"],
  ["Omeprazole 20 mg + Domperidone 10 mg"],
  ["Pantoprazole 40mg + Domperidone 30mg"],
  ["Rabeprazole 20 mg"],
  ["Rabeprazole 20 mg + Domperidone 30 mg"],
  ["Rabeprazole 20mg + Levosulpiride 75mg"],
  ["Rifampicin 450mg + Isoniazine 300mg"],
  ["Tetracycline Hydrochloride Capsules 250 mg / 500 mg"],
  ["Thiocolchicoside Capsules IP 4 mg"],
  [
    "Zinc Sulphate 74.93mg + Thiamine 10mg + Riboflavine 10mg + Niacinamide 50mg + Pyridoxine 3mg + Cynacobalamin 15mcg + Calcium pantothenate 12.5mg + Ascorbic acid 150mg",
  ],
];

const drySyrupDataset = [
  ["Erythromycin Estolate 125mg/5ml - Oral Suspension - HDPE / Glass"],
  ["Azithromycin Dihydrate 125mg/5ml - Oral Suspension - HDPE / Glass"],
];

const powderDataset = [
  [
    "Dextrose 17.5mg + Zinc Sulphate 32.5mg + Sucrose 14gm + Ascorbic acid 50mg",
  ],
  [
    "Protein Hydrolysate 20% 5 gm + Calcium IP 225 mg + Phosphorous IP 174 mg + Niacinamide IP 15mg + Vitamin A IP 2000 IU + Thiamine HCL IP 1mg + Riboflavine IP 1mg + Cynacobalamine IP 1Mcg + Ascorbic Acid IP 50 Mg + Pantothenate IP 5 Mg + Zinc IP 7.5 Mg + Iron IP 7.5 Mg",
  ],
];

const svpLvpDataset = [
  ["Normal Saline (NS)"],
  ["Dextrose Normal Saline"],
  ["Ringer Lactate (RL)"],
  ["Dextrose 5% (D5)"],
];

function createTabletsTable() {
  document.getElementById("product-table").style.display = "block";
  document.getElementById("product-table").scrollIntoView();
  document.getElementById("product-name").innerHTML = "Tablets";
  var table = new $("#example")
    .DataTable({
      responsive: true,
      data: tabletDataset,
      bDestroy: true,
    })
    .columns.adjust()
    .responsive.recalc();
}

function createCapsulesTable() {
  document.getElementById("product-table").style.display = "block";
  document.getElementById("product-table").scrollIntoView();
  document.getElementById("product-name").innerHTML = "Capsules";
  var table = new $("#example")
    .DataTable({
      responsive: true,
      data: capsulesDataset,
      bDestroy: true,
    })
    .columns.adjust()
    .responsive.recalc();
}

function createDrySyrupTable() {
  document.getElementById("product-table").style.display = "block";
  document.getElementById("product-table").scrollIntoView();
  document.getElementById("product-name").innerHTML = "Dry Syrup";
  var table = new $("#example")
    .DataTable({
      responsive: true,
      data: drySyrupDataset,
      bDestroy: true,
    })
    .columns.adjust()
    .responsive.recalc();
}

function createPowderTable() {
  document.getElementById("product-table").style.display = "block";
  document.getElementById("product-table").scrollIntoView();
  document.getElementById("product-name").innerHTML = "Powder";
  var table = new $("#example")
    .DataTable({
      responsive: true,
      data: powderDataset,
      bDestroy: true,
    })
    .columns.adjust()
    .responsive.recalc();
}

function createSvpLvpTable() {
  document.getElementById("product-table").style.display = "block";
  document.getElementById("product-table").scrollIntoView();
  document.getElementById("product-name").innerHTML = "SVP/LVP";
  var table = new $("#example")
    .DataTable({
      responsive: true,
      data: svpLvpDataset,
      bDestroy: true,
    })
    .columns.adjust()
    .responsive.recalc();
}
