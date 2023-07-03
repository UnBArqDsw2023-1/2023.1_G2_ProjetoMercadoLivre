from abc import ABC, abstractmethod

# Interface Avaliation
class Avaliation(ABC):
    @abstractmethod
    def avaliate(self, b: Buyer, p: Product) -> bool:
        pass

