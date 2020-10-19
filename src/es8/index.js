const data = {
  frontend: 'Felipe',
  backend: 'Luis',
  design: 'pilar'
}

const entries = Object.entries(data);
console.log(entries)

const data = {
  frontend: 'Felipe',
  backend: 'Luis',
  design: 'pilar'
}

const values = Object.values(data);
console.log(values)

const str = 'Hello';
console.log(str.padStart(6, 'hi'))
console.log(str.padEnd(6, 'hello'))

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello world'), 3000)
      : reject(new Error('Test Error'))
  })
}

const hellowAsync = async () => {
  const hello = await helloWorld();
  console.log(hello)
}

hellowAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello)

  } catch (error) {
    console.log(error)
  }
}