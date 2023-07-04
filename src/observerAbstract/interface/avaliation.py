from abc import ABC, abstractmethod
from buyer import Buyer
from product import Product

# Interface Avaliation
class Avaliation(ABC):
    @abstractmethod
    def avaliate(self, buyer: Buyer, product: Product, score: float):
        """Generate the avaliation that the buyer has answered"""
        pass
    def _validate_score(self, score: float):
        return max(0, min(score, 5))

