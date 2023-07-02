
class AvaliationNotifier:
    def __init__(self):
        self.avaliations = []

    def subscribe(self, avaliation):
        self.avaliations.append(avaliation)

    def notifyProduct(self):
        for avaliation in self.avaliations:
            avaliation.updateProduct()

    def notifySeller(self):
        for avaliation in self.avaliations:
            avaliation.updateSeller()
# fiquei um pouco trava nesse código.
# preciso dar uma olhada melhor depois para continuar o desenvolvimento.
