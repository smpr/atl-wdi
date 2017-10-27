# asking for subtotal
puts "Total to be calculated"
before_tax = gets.chomp.to_f
puts before_tax
puts "Total amount of guests at table?"
people = gets.chomp.to_f
puts "What is the tax rate?"
tax_rate = gets.chomp.to_f
puts tax_rate
tax_value = before_tax * (tax_rate/100)
puts tax_value

after_tax = tax_value + before_tax
puts after_tax
puts %q{
    how much tip to leave?
    1. 15%
    2. 18%
    3. 20%
    4. other
  }
  tip_percent_option = STDIN.gets.chomp
  puts tip_percent_option


case tip_percent_option
  when "1"
    tip_percent = 0.15
  when "2"
    tip_percent = 0.18
  when "3"
    tip_percent = 0.20
  else
    puts "Invalid option, assuming 50% tip"
    tip_percent = 0.50
end
puts tip_percent
subtotal_with_tip = before_tax + (before_tax * tip_percent)
puts subtotal_with_tip
total_bill = subtotal_with_tip + tax_value
puts total_bill
split_check = total_bill/people
puts "Per Person Owed:"
puts split_check
# meal_with_tax = before_tax + tax_value

# total_value = meal_with_tax * tip_percent/100
# total = meal_with_tax + tip_value
