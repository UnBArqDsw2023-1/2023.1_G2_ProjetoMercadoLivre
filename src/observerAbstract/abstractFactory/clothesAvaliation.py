from avaliation import Avaliation

class ClothesAvaliation(Avaliation):
    def __init__(self, buyerId: int, productId: int, score: float, questions: list[str]):
        self.buyerId = buyerId
        self.productId = productId
        self.score = score
        self.questions = questions

    def avaliate(self, b: Buyer, p: Product) -> bool:
        # preciso pensar na lógica específica dos critérios de avaliação para as roupas
    

