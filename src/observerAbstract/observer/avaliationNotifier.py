from interface.avaliation import Avaliation

class AvaliationNotifier:
    __avaliations: list[Avaliation]
    def __init__(self):
        self.avaliations = []

    def subscribe(self, avaliation: Avaliation):
        self.avaliations.append(avaliation)
        self._notifyProduct()
        self._notifySeller()

    def _notifyProduct(self):
        for avaliation in self.avaliations:
            avaliation.updateProduct()

    def _notifySeller(self):
        for avaliation in self.avaliations:
            avaliation.updateSeller()
