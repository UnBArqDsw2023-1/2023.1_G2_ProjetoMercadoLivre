from avaliation import Avaliation

class TechAvaliation(Avaliation):
    def __init__(self, buyerId: int, productId: int, score: float, questions: list[str]):
        self.buyerId = buyerId
        self.productId = productId
        self.score = score
        self.questions = questions

    def avaliate(self, b: Buyer, p: Product, score: float) -> bool:
    
        if score < 0:
            score = 0
        elif score > 5:
            score = 5

        buyer_name = b.name  
        seller = p.sellerId  
        product = p.productId  

        return True
        #nao to sabendo criar a instancia da avaliacao a partir do score ser setado
