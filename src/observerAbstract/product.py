from enum import Enum

class Category(Enum):
    CLOTHES = 'Clothes'
    TECH = 'Tech'

class Product:
    def __init__(self, sellerId: int, avgScore: float, category: Category):
        self.sellerId = sellerId
        self.avgScore = avgScore
        self.category = category

    def updateScore(self, newScore: int):
        self.avgScore = newScore

