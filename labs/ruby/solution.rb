#1:
#2:
#3:
def hash_switcher input
    hash_to_return = {}
    if input.class == hash_switcher
        input.invert
    end
elsif input.class == Array
    new_arr = input.map do |item|
        item.invert
    end
return new_arr
end
end
#4:
def export_hash(arr1, arr2)
    if arr1.class != Array || arr2.class !=Array
        return nil
    end
    if arr1.length != arr2.length
        return "your input is bad so you should feel bad"
    end
    h= {}
     arr1.length.times do |index|
        h[arr1[index]] = arr2[index]
     end
     h
end