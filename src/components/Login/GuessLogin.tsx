function GuessLogin({className}: {className: string}) {
  return <button className={`transition-colors bg-blue hover:bg-blue-opaque text-white flex-1 font-bold ${className}`}>Guess</button>
}

export { GuessLogin }