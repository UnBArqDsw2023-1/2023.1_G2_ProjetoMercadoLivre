from avaliation import Avaliation

class TechAvaliation(Avaliation):
    def __init__(self, buyerId: int, productId: int, score: float, questions: list[str]):
        self.buyerId = buyerId
        self.productId = productId
        self.score = score
        self.questions = questions

    def avaliate(self, b: Buyer, p: Product) -> bool:
        # Preciso pensar na lógica específica dos critérios de avaliação para tecnologia
