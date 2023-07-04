-- CreateTable
CREATE TABLE "Comment" (
    "idComment" SERIAL NOT NULL,
    "likes" BIGINT NOT NULL,
    "dislikes" BIGINT NOT NULL,
    "text" TEXT,
    "idAvaliation" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("idComment")
);

-- CreateTable
CREATE TABLE "Avaliation" (
    "idAvaliation" TEXT NOT NULL,
    "classification" DOUBLE PRECISION NOT NULL,
    "avaliationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idComment" INTEGER NOT NULL,
    "idBuyer" INTEGER NOT NULL,
    "idSeller" INTEGER NOT NULL,

    CONSTRAINT "Avaliation_pkey" PRIMARY KEY ("idAvaliation")
);

-- CreateTable
CREATE TABLE "Phone" (
    "number" BIGINT NOT NULL,
    "cpfUser" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "cpfUser" BIGINT NOT NULL,
    "cep" BIGINT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("cpfUser")
);

-- CreateTable
CREATE TABLE "Buyer" (
    "idBuyer" SERIAL NOT NULL,
    "orderAmount" INTEGER NOT NULL,
    "cpfUser" BIGINT NOT NULL,

    CONSTRAINT "Buyer_pkey" PRIMARY KEY ("idBuyer")
);

-- CreateTable
CREATE TABLE "Seller" (
    "idSeller" SERIAL NOT NULL,
    "cpfUser" BIGINT NOT NULL,
    "reputation" INTEGER NOT NULL,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("idSeller")
);

-- CreateTable
CREATE TABLE "Product" (
    "idProduct" SERIAL NOT NULL,
    "idSeller" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "caracteristic" TEXT NOT NULL,
    "stock" BIGINT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("idProduct")
);

-- CreateTable
CREATE TABLE "Order" (
    "idOrder" SERIAL NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "orderAmount" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("idOrder")
);

-- CreateTable
CREATE TABLE "owns" (
    "idOrder" INTEGER NOT NULL,
    "idProduct" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BuyerToOrder" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Phone_number_cpfUser_key" ON "Phone"("number", "cpfUser");

-- CreateIndex
CREATE UNIQUE INDEX "Buyer_cpfUser_key" ON "Buyer"("cpfUser");

-- CreateIndex
CREATE UNIQUE INDEX "Seller_cpfUser_key" ON "Seller"("cpfUser");

-- CreateIndex
CREATE UNIQUE INDEX "owns_idOrder_idProduct_key" ON "owns"("idOrder", "idProduct");

-- CreateIndex
CREATE UNIQUE INDEX "_BuyerToOrder_AB_unique" ON "_BuyerToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_BuyerToOrder_B_index" ON "_BuyerToOrder"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_idAvaliation_fkey" FOREIGN KEY ("idAvaliation") REFERENCES "Avaliation"("idAvaliation") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_idBuyer_fkey" FOREIGN KEY ("idBuyer") REFERENCES "Buyer"("idBuyer") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_idSeller_fkey" FOREIGN KEY ("idSeller") REFERENCES "Seller"("idSeller") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phone" ADD CONSTRAINT "Phone_cpfUser_fkey" FOREIGN KEY ("cpfUser") REFERENCES "User"("cpfUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buyer" ADD CONSTRAINT "Buyer_cpfUser_fkey" FOREIGN KEY ("cpfUser") REFERENCES "User"("cpfUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_cpfUser_fkey" FOREIGN KEY ("cpfUser") REFERENCES "User"("cpfUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_idSeller_fkey" FOREIGN KEY ("idSeller") REFERENCES "Seller"("idSeller") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owns" ADD CONSTRAINT "owns_idOrder_fkey" FOREIGN KEY ("idOrder") REFERENCES "Order"("idOrder") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owns" ADD CONSTRAINT "owns_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BuyerToOrder" ADD CONSTRAINT "_BuyerToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "Buyer"("idBuyer") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BuyerToOrder" ADD CONSTRAINT "_BuyerToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("idOrder") ON DELETE CASCADE ON UPDATE CASCADE;
