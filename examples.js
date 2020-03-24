var examples = [{
    name: "Olá, Mundo!",
    code: '# Escrevendo Olá, Mundo!\n\nescreva "Olá, Mundo!"'
}, {
    name: 'Strings',
    code: '# Concatenação e escrita de strings\n\nx = "Olá, Mundo!"\ny = "Olá, Egua!"\n\nescreva x + ", ou, " + y'
}, {
    name: "Matemática",
    code: "# Efetuando soma, subtração, multiplicação e divisão de valores\n\nx = 23 / 2 + 15.0 % 3.0 ** 2 * -4\ny = 6\nz = y / 2\nescreva 5\nescreva x\nescreva y\nescreva z"
}, {
    name: "Condicionais",
    code: "# Utilização do se e se-contrario, assim como operadores lógicos <, > !=, ==\n\ny = 6\nse 5 > 1:\n\tescreva 7\nfim\nx = 20.0\nse x < 1000:\n\tescreva x\ncontrario: \n\tescreva 10\nfim\nse x == 2:\n\tse y != x:\n\t\tescreva 3\n\tfim\ncontrario:\n\tescreva y\nfim\nse y >= 5:\n\tescreva y\nfim\n\nse y <= 6:\n\tescreva y\nfim"
}, {
    name: 'Repetição',
    code: "# Laço de repetição com o enquanto\n\na = 0\nenquanto a < 5:\n    a = a + 1\n    escreva a\nfim\n"
}, {
    name: 'Funções',
    code: "# Funções sem o uso de argumentos\n\nfuncao g():\n\tx = 30\n\tescreva x\nfim\n\nfuncao f():\n\tx = 20\n\tescreva 5\n\tg()\n\tescreva x\nfim\n\nx = 10\nf()\nescreva x\n"
}, {
    name: "Argumentos",
    code: "# Funções com argumentos\n\nfuncao h(a,b,c,d,e,f,g):\n\tescreva a\n\tescreva b\n\tescreva c\n\tescreva d\n\tescreva e\n\tescreva f\n\tescreva g\nfim\n\nfuncao g(z):\n\tescreva z\nfim\nfuncao f(x, z):\n\ty = x / 2\n\tescreva x\n\tescreva y\n\tescreva z\n\tg(z)\n\tx = x - 1\n\tg(x)\nfim\n\t\t\nx = 10\nf(14,x)\nescreva x\nh(1,2,3,4,5,6,x)\n"
}, {
    name: 'Fibonacci',
    code: "# Recursão para o cálculo da sequência de fibonnaci\n\nfuncao fibonnaci(n):\n\tse n == 0:\n\t\tretorna 0\n\tcontrario:\n\t\tse n == 1:\n\t\t\tretorna 1\n\t\tcontrario:\n\t\t\tn1 = n-1\n\t\t\tn2 = n-2\n\t\t\tf1 = fibonnaci(n1)\n\t\t\tf2 = fibonnaci(n2)\n\t\t\tretorna  f1 + f2\n\t\tfim\n\tfim\t\nfim\n\n\na = fibonnaci(0)\nescreva a\na = fibonnaci(1)\nescreva a\na = fibonnaci(2)\nescreva a\na = fibonnaci(3)\nescreva a\na = fibonnaci(4)\nescreva a\na = fibonnaci(5)\nescreva a\n"
}, {
    name: 'Fatorial',
    code: "# Recursão para cálculo simples de fatorial\n\nfuncao factorial(n):\n    se n < 2:\n        retorna 1\n    contrario:\n        n1 = n - 1\n        f = factorial(n1)\n        retorna n * f \n    fim\nfim\n\nx = factorial(10)\nescreva x"
}, {
    name: 'Listas',
    code: '# Uso de listas\n\nfuncao test(array):\n\tarray.append(11)\n\tretorna array\nfim\n\nfuncao clear(array):\n\tenquanto len(array) > 0:\n\t\tarray.pop()\n\tfim\n\tretorna array\nfim\n\n\nb = 9\na = [1,b,3.2,4,5.2,6,7,8]\nd = []\nescreva a\nescreva a[0]\nc = a[4]\nescreva c\na[5] = 22\nescreva a[5]\nescreva a\nescreva "Lista vazia: " + d\ne = len(a)\nescreva "Tamanho : " + e\n\nd.append(2)\nd.append(6)\nescreva "Anexado 2, 6 "\nescreva d\nd.pop()\nescreva "Usando pop"\nescreva d\nd = test(d)\nescreva d\na = clear(a)\nescreva a'
}, {
    name: 'Bhaskara',
    code: 'funcao bhaskara(d,a,b,c,x1,x2):\n\t#A variável "d" vai simbolizar o Delta.\n\t#"a", "b", e "c" irão representar os coeficientes da equação.\n\td = b**2\n\tf = 4*a*c \n\td = d-f\n\tescreva "O valor de Delta é: "+ d\n\td = d**0.5\n\t\n\t#Encontrando os valores de X1 e X2.\n\tx1 = -b+d\n\tx1 = x1/2*a\n\tescreva "O valor de X1 é: "+ x1\n\tx2 = -b-d\n\tx2 = x2/2*a\n\tescreva "O valor de X2 é: "+ x2\n\t#Resultado das substituições de X por X1 e X2 na equação.\n\tr1 = x1**2\n\tr1 = a*r1\n\tr1 = b*x1 + r1\n\tr1 = r1 + c\n\tescreva "Substituindo X1 na equação obtém-se:"+ r1\n\tr2 = x2**2\n\tr2 = a*r2\n\tr2 = b*x2 + r2\n\tr2 = r2 + c\n\tescreva "Substituindo X2 na equação obtém-se:"+ r2\nfim\n\n#Insira o valor do coeficiente A:\na = 1\n\n#Insira o valor do coeficiente B:\nb = -1\n\n#Insira o valor do coeficiente B:\nc = -30\n\nbhaskara(d,a,b,c,x1,x2)'
}, {
    name: 'Perceptron Simples',
    code: 'pesoInicial1 = 0.3\npesoInicial2 = 0.4\n\nentrada1 = 1\nentrada2 = 1\n\nerro = 1\nenquanto erro != 0:\n\tse entrada1 == 1:\n\t\tse entrada2 == 1:\n\t\t\tresultadoEsperado = 1\n\t\t\t\tfim\n\t\t\tcontrario:\n\t\tresultadoEsperado = 0\n\tfim\n\n\tsomatoria = pesoInicial1 * entrada1\n\tsomatoria = pesoInicial2 * entrada2 + somatoria\n\n\tse somatoria < 1:\n\t\tresultado = 0\n\tcontrario:\n\t\tse somatoria >= 1:\n\t\t\tresultado = 1\n\t\tfim\n\tfim\n\n\tescreva "resultado: " + resultado\n\n\terro = resultadoEsperado - resultado\n\n\tescreva "p1: " + pesoInicial1\n\tescreva "p2: " + pesoInicial2\n\n\t    pesoInicial1 = 0.1 * entrada1 * erro + pesoInicial1\n\tpesoInicial2 = 0.1 * entrada2 * erro + pesoInicial2\n\n\tescreva "erro: " + erro\nfim'
}, {
    name: 'Perceptron Bias',
    code: 'pesoInicial1 =  0.3\npesoInicial2 =  0.4\npesoBias = 0.2\n\nentrada1 = 1\nentrada2 = 1\nbias = 1\n\nerro = 1\nenquanto erro != 0:\n\tse entrada1 == 1:\n\t\tse entrada2 == 2:\n\t\t\tresultadoEsperado = 1\n\t\t\t\tfim\n\t\t\tcontrario:\n\t\tresultadoEsperado = 0\n\tfim\n\n\tsomatoria = pesoInicial1 * entrada1\n\tsomatoria = pesoInicial2 * entrada2 + somatoria\n\t somatoria = pesoBias * bias + somatoria\n\n\tse somatoria < 1:\n\tresultado = 0\n\t contrario:\n\t\t se somatoria >= 1:\n\t\tresultado = 1\n\t\tfim\n\tfim\n\n\tescreva "resultado: " + resultado\n\n\terro = resultadoEsperado - resultado\n\n\tescreva "p1: " + pesoInicial1\n\tescreva "p2: " + pesoInicial2\n\tescreva "pb: " + pesoBias\n\n\tpesoInicial1 = 0.1 * entrada1 * erro + pesoInicial1\n\tpesoInicial2 = 0.1 * entrada2 * erro + pesoInicial2\n\tpesoBias = 0.1 * bias * erro + pesoBias\n\n\tescreva "erro: " + erro\nfim'
}];
