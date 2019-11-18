class Api::BooksController < ApplicationController
  def index
    books = Book.all
    render json: books
  end

  def create
    book=Book.new(book_params)
    if book.save
      render json: {
        status: 201,
        book:book
      }
    else
      render json: {
        status: 401,
        errors: ['A problem occured when trying to save the new book']
      }
    end
  end

  def show
    book = Book.find(params[:id])

    if !book.nil?
      render json: {
        status: 200,
        book: book
      }
    else
      render json: {
        status: 401,
        errors: ['A problem occured when trying to save the new book']
      }
    end
  end

  def update
    book = Book.find(params[:id])
    if book.update_attributes(book_params)
      render json: {
        status: 202,
        book: book
      }
    else
      render json: {
        status: 401,
        errors: ['A problem occured when trying to save the new book']
      }
    end
  end

  def destroy
    book = Book.find(params[:id])

    if book.destroy
      render json: {
        status: 200
      }
    else
      render json: {
        status: 401,
        errors: ['A problem occured when trying to save the new book']
      }
    end
  end
  private
   def book_params
      params.require(:book).permit(:title,:description,:ISBN,:link)
   end
end
