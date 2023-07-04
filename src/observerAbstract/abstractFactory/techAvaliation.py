from interface.avaliation import Avaliation
from buyer import Buyer
from product import Product

class TechAvaliation(Avaliation):
    __buyerId: int
    __productId: int
    __score: float
    __questions = ["Avalie as características"]
    def __init__(self, buyerId: int, productId: int, score: float, questions: list[str]):
        super().__init__(buyerId, productId)
        self.score = score

    def avaliate(self, buyer: Buyer, product: Product, score: float) -> "TechAvaliation":
    
        score = self._validate_score(score)
        return TechAvaliation(buyer.id, product.id, score)