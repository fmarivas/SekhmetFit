document.addEventListener("DOMContentLoaded", () => {
 const name = document.getElementById('name').value;
 const btnSubmit = document.getElementById("btn-submit");
 
 const btnCreateDiet = document.getElementById('create-diet-button');

 const activityLevelSelect = document.getElementById("activity-level");
 
 
 


btnSubmit.addEventListener("click", () => {
   event.preventDefault(); // Impede o comportamento padrão do formulário
   

   btnCreateDiet.style.display = 'block';
   
// Verificar campos obrigatórios 
   const requiredFields = ['name', 'age', 'weight', 'height'];
   const emptyFields = requiredFields.filter(field => {
   const value = document.getElementById(field).value;
   return !value.trim();
	});


// Verificar se o campo de gênero foi selecionado
const genderSelect = document.getElementById('gender');
const gender = genderSelect.value;


// Verificar se o campo de nível de atividade foi selecionado
const activityLevelSelect = document.getElementById('activity-level');
const activityLevel = activityLevelSelect.value;



//Calculo
let TDEE; // Declaração da variável TDEE fora das condicionais if/else


if (gender === 'Feminino') {
  if (activityLevel === 'sedentary') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
	
    TDEE = (655 + 9.6 * weight + 1.8 * height - 4.7 * age) * 1.2;
  } else if (activityLevel === 'lightly-active') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
	
    TDEE = (655 + 9.6 * weight + 1.8 * height - 4.7 * age) * 1.375;
  } else if (activityLevel === 'moderately-active') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		  
    TDEE = (655 + 9.6 * weight + 1.8 * height - 4.7 * age) * 1.55;
  } else if (activityLevel === 'very-active') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		  
    TDEE = (655 + 9.6 * weight + 1.8 * height - 4.7 * age) * 1.725;
  } else if (activityLevel === 'extremely-active') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		  
    TDEE = (655 + 9.6 * weight + 1.8 * height - 4.7 * age) * 1.9;
  }
  TDEE = TDEE.toFixed(0);
} else if (gender === 'Masculino') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		
  if (activityLevel === 'sedentary') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		  
    TDEE = (66 + 13.7 * weight + 5 * height - 6.8 * age) * 1.2;
  } else if (activityLevel === 'lightly-active') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		  
    TDEE = (66 + 13.7 * weight + 5 * height - 6.8 * age) * 1.375;
  } else if (activityLevel === 'moderately-active') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		  
    TDEE = (66 + 13.7 * weight + 5 * height - 6.8 * age) * 1.55;
  } else if (activityLevel === 'very-active') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		  
    TDEE = (66 + 13.7 * weight + 5 * height - 6.8 * age) * 1.725;
  } else if (activityLevel === 'extremely-active') {
	const age = document.getElementById('age').value;
	const weight = document.getElementById('weight').value;
	const height = document.getElementById('height').value;
		  
    TDEE = (66 + 13.7 * weight + 5 * height - 6.8 * age) * 1.9;
  }
  TDEE = TDEE.toFixed(0);
}


//intolerancias

var intolerancias = [];

if (document.getElementById('gluten-intolerance').checked) {
  intolerancias.push('gluten');
}

if (document.getElementById('lactose-intolerance').checked) {
  intolerancias.push('lactose');
}

if (document.getElementById('soy-intolerance').checked) {
  intolerancias.push('soy');
}



//Aqui se apresenta o resultado  
const menuOptions = document.getElementById('menu-options');
const menuOPT = menuOptions.value;

  const ProtResult = document.getElementById('protein-result');
  const GordResult = document.getElementById('fat-result');
  const CarbResult = document.getElementById('carbohydrates-result');
  let Calc, prot, gord, carb, AC;
  
  
if (menuOPT === 'maintenance') {
  Calc = TDEE;
  AC = TDEE*.1;
  AC = AC.toFixed(0);
  const message = "Esses valores de macronutrientes refletem suas calorias de manutenção de <strong>" + Calc + "</strong> calorias por dia.";  
  document.getElementById('macronutrient-info').innerHTML = message;
} else if (menuOPT === 'cutting') {
  Calc = TDEE*(1-.1);
  Calc = Calc.toFixed(0)
  AC = TDEE*.1;
  AC = AC.toFixed(0);
  const message = "Esses valores de macronutrientes refletem suas calorias de volume de <strong>"+Calc+"</strong> calorias por dia, o que é <strong>"+AC+"</strong> calorias por dia de sua manutenção de <strong>"+TDEE+"</strong> calorias por dia."
  document.getElementById('macronutrient-info').innerHTML = message;
} else if (menuOPT === 'bulking') {
  Calc = TDEE*(1+.1);
  Calc = Calc.toFixed(0)
  AC = TDEE*.1;
  AC = AC.toFixed(0);  
  const message = "Esses valores de macronutrientes refletem suas calorias de volume de <strong>"+Calc+"</strong> calorias por dia, o que é <strong>"+AC+"</strong> calorias por dia de sua manutenção de <strong>"+TDEE+"</strong> calorias por dia."
  document.getElementById('macronutrient-info').innerHTML = message;
}

prot = weight.value * 2;
gord = weight.value * 1;
carb = (Calc - (prot * 4 + gord * 1))/4;

ProtResult.textContent = prot.toFixed(0);
GordResult.textContent = gord.toFixed(0);
CarbResult.textContent = carb.toFixed(0);


//Criar dieta
// Função para criar o plano alimentar
function createDietPlan(TDEE, protein, fat, carbohydrates) {
  const apiKey = 'nD6FGpUIkJ58Jt3SvFlzDEdScDXly3kEE8VKcNlF'; // Substitua pela sua chave de API do FoodData Central

  // Função para fazer a requisição à API do FoodData Central
  function fetchFoods() {
    const query = `Calories,Protein,Fat,Carbohydrate`; // Informe aqui os nutrientes desejados
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const foods = data.foods;
        const suggestedFoodsList = [];

        // Gerar 6 refeições com 4 alimentos cada
        for (let i = 0; i < 6; i++) {
          const mealFoods = [];

          // Selecionar 4 alimentos aleatórios
          for (let j = 0; j < 4; j++) {
            const randomFood = foods[Math.floor(Math.random() * foods.length)];
            const name = randomFood.description.split(',')[0]; // Obtém apenas o nome curto do alimento
            const proteinValue = randomFood.foodNutrients.find(nutrient => nutrient.nutrientName === 'Protein')?.value || 0;
            const fatValue = randomFood.foodNutrients.find(nutrient => nutrient.nutrientName === 'Fat')?.value || 0;
            const carbohydrateValue = randomFood.foodNutrients.find(nutrient => nutrient.nutrientName === 'Carbohydrate')?.value || 0;
            const proteinAmount = Math.round(protein * proteinValue);
            const fatAmount = Math.round(fat * fatValue);
            const carbohydrateAmount = Math.round(carbohydrates * carbohydrateValue);
            mealFoods.push(`${name} - P: ${proteinAmount}g, G: ${fatAmount}g, C: ${carbohydrateAmount}g`);
          }

          suggestedFoodsList.push(mealFoods);
        }

        displayFoods(suggestedFoodsList);
      })
      .catch(error => {
        console.log('Erro na requisição à API:', error);
        displayChatMessage('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.');
      });
  }

  // Função para exibir a lista de alimentos sugeridos na interface HTML
  function displayFoods(foods) {
    let mealInfo = '';
    foods.forEach((meal, index) => {
      mealInfo += `<div class="meal"><strong>Refeição ${index + 1}:</strong><br>`;
      meal.forEach((food, foodIndex) => {
        mealInfo += `${food}<br>`;
      });
      mealInfo += `</div><br>`;
    });

    const resultadoDieta = document.getElementById('resultado-dieta');
    resultadoDieta.innerHTML = mealInfo;
  }

  // Chamar a função para buscar os alimentos na API
  fetchFoods();
}

// Obter os dados do usuário
prot = prot.toFixed(0);
gord = gord.toFixed(0);
carb = carb.toFixed(0);

// Criar o plano alimentar
const dietPlanButton = document.getElementById('create-diet-button');
dietPlanButton.addEventListener('click', () => {
  createDietPlan(Calc, prot, gord, carb);
  
  const resultadoDieta = document.getElementById('resultado-dieta');
  resultadoDieta.innerHTML = ''; // Limpa o conteúdo atual
  resultadoDieta.innerHTML = mealInfo;
});
















});

 
 
});