from interface.avaliation import Avaliation
from buyer import Buyer
from product import Product

class ClothesAvaliation(Avaliation):
    __buyerId: int
    __productId: int
    __score: float
    __questions = ["Como ficou ?", "Avalie as características"]
    def __init__(self, buyerId: int, productId: int, score: float):
        super().__init__(buyerId, productId)
        self.score = score

    def avaliate(self, buyer: Buyer, product: Product, score: float) -> "ClothesAvaliation":    
        score = self._validate_score(score)
        return ClothesAvaliation(buyer.id, product.id, score)