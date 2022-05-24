export function toLocaleString(dateString: string | number): string {
  return new Date(dateString).toLocaleDateString('pt-BR')
}

export function dataAgora() {
  return new Date().toLocaleDateString('fr-CA')
}

export function horaAgora() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}
